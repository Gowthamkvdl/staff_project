import React, { Suspense, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardSkeleton from "../../components/skeletonCard/SkeletonCard";
import { Link, useLoaderData, useNavigate, Await } from "react-router-dom";
import apiRequest from "../../lib/apiRequest"; // Ensure this is correctly imported
import { toast } from "react-hot-toast";

const Profile = () => {
  const posts = useLoaderData();
  const [deletingId, setDeletingId] = useState(null); // State to track the post being deleted
  const [deleting, setDeleting] = useState(false); // State for loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await apiRequest.delete(`/post/deletePost/${id}`); // Pass the ID in the URL
      window.location.reload(); // Reload the page to fetch the updated posts
      toast.success("Post deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete post");
    } finally {
      setDeleting(false);
      setDeletingId(null); // Clear the deleting ID
    }
  };

  return (
    <div>
      <div className="header mt-2 ">
        <span className="title-text heading">Admin Dashboard</span>
        <br />
        <span className="opacity-75">
          You can upload and manage updates here.
        </span>
      </div>
      <div className="addNewPostAndLogout mt-3 row">
        <div className="col-7">
          <Link to={"/newPost"} className="link">
            <div className="btn btn-primary w-100 d-flex gap-1 justify-content-center align-items-center mt-3 fs-2">
              <span className="material-symbols-outlined fs-1">add_circle</span>
              <span>New Post</span>
            </div>
          </Link>
        </div>
        <div className="col-5">
          <button
            onClick={handleLogout}
            className="btn w-100 d-flex gap-1 justify-content-center align-items-center mt-3 fs-2 primary-500 text-white"
          >
            <span className="material-symbols-outlined fs-1">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="cards">
        <div className="subtitle-text mt-5">Already posted things</div>
        <Suspense
          fallback={
            <div className="cards">
              <CardSkeleton NoOfCards={8} />
            </div>
          }
        >
          <Await
            resolve={posts.postsResponse}
            errorElement={
              <div>
                {/* Handle error appropriately */}
                <p>Error loading posts.</p>
              </div>
            }
          >
            {(resolvedPosts) =>
              resolvedPosts.data.map((post) => (
                <div className="bookCard" key={post.postId}>
                  <Card post={post} />
                  <div className="btns ms-auto mt-2">
                    <button className="btn btn-warning ms-3 me-2">
                      <Link
                        to={`/editPost/?id=${post.postId}`}
                        className="link"
                      >
                        <span className="material-symbols-outlined text-dark">
                          edit
                        </span>
                      </Link>
                    </button>
                    <button
                      className="btn primary-500 text-white"
                      data-bs-toggle="modal"
                      data-bs-target={`#deleteModal${post.postId}`}
                      onClick={() => setDeletingId(post.postId)} // Store the ID of the post to delete
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  {/* Modal for confirming deletion */}
                  <div
                    className="modal fade"
                    id={`deleteModal${post.postId}`}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Are you sure?
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Do you want to delete this post?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            onClick={() => handleDelete(post.postId)} // Pass the ID to handleDelete
                            type="button"
                            className="btn btn-danger"
                          >
                            {deleting ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Profile;
