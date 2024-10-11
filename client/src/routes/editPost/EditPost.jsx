import React, { useEffect, useState } from "react";
import BackBtn from "../../components/backBtn/BackBtn";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { toast } from "react-hot-toast";

const EditPost = () => {
  const [searchParams] = useSearchParams(); // Destructure to get searchParams
  const [postData, setPostData] = useState(null); // State to hold post data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [getting,setGetting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPostData = async () => {
      const postId = searchParams.get("id"); // Get the post ID from search params
      try {
        setLoading(true); 
        setGetting(true);
        const response = await apiRequest.get(`/post/${postId}`); // Fetch the post data
        setPostData(response.data); // Set the post data in state
      } catch (err) {
        console.log(err);
        setError("Failed to fetch post data."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
        setGetting(false);
      }
    };

    fetchPostData(); // Call the function
  }, [searchParams]); // Include searchParams as a dependency

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set updating state to true

    const formData = new FormData(e.target); // Create FormData from the form
    const postId = searchParams.get("id"); // Get the post ID again
    console.log("sdgdsg")
    // Optional: Get additional form data if needed
    const title = formData.get("title").trim();
    const pdf = formData.get("pdf");
    const thumbnail = formData.get("thumbnail");
    const link = formData.get("link");

    // Append the post ID to the FormData
    formData.append("id", postId);
    formData.append("title", title);
    formData.append("link", link);

    try {
      const postResponse = await apiRequest.put(
        `/post/updatePost/${postId}`, // Update the post at this endpoint
        formData, // Send formData directly
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type
          },
        }
      );
      console.log(postResponse);
      // Optionally, redirect or show success message here
      navigate("/profile")
      toast.success("Post updated successfully.");
    } catch (error) {
      console.log(error);
      setError("Failed to update post."); // Set error message
      toast.error("Failed to update post.");
    } finally {
      setLoading(false); // Set updating state to false
    }
  };

  return (
    <div>
      <div>
        <div className="mt-3"></div>
        <BackBtn />
        <div className="header d-flex flex-column">
          <span className="title-text heading">Edit Post</span>
          <span className="opacity-75">You can add edit post here.</span>
        </div>
        {getting && <span className="text-center mx-auto">Loading...</span>}
        {!getting && (
          <form action="" onSubmit={handleUpdate} className="mt-4 mx-3">
            <label htmlFor="title">Topic Title</label>
            <input
              type="text"
              name="title"
              defaultValue={postData && postData.title}
              className="form-control shadow-none mb-2"
              id="title"
            />
            <label htmlFor="thumbnail">Thumbnail Image</label>
            <input
              type="file"
              name="thumbnail"
              className="form-control shadow-none mb-2"
              id="thumbnail"
              accept="image/*"
            />
            <label htmlFor="pdf">PDF</label>
            <input
              type="file"
              name="pdf"
              className="form-control shadow-none mb-2"
              id="pdf"
              accept="application/pdf"
            />

            <label htmlFor="link">Video Link</label>
            <input
              type="text"
              name="link"
              className="form-control shadow-none mb-2"
              id="link"
              defaultValue={postData && postData.link}
            />
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                name="important"
                defaultChecked={postData && postData.important}
                className="form-check form-check-xl"
                id="important"
              />
              <label htmlFor="important">Important</label>
            </div>
            <button
              disabled={loading}
              className="uploadBtn btn btn-primary float-end mt-3"
              type="submit"
            >
              {loading === true ? "Updating..." : "Update"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditPost;
