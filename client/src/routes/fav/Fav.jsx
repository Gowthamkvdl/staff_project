import React, { Suspense } from 'react';
import Card from '../../components/card/Card';
import { useLoaderData, Await } from 'react-router-dom';
import CardSkeleton from '../../components/skeletonCard/SkeletonCard';

const Fav = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <div className="header mt-2 d-flex flex-column">
        <span className="title-text heading">Featured Topics</span>
        <span className="opacity-75">
          Highlighted topics will be available here.
        </span>
      </div>

      <div className="cards">
        <Suspense
          fallback={
            <div>
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
            {(resolvedPosts) => (
              console.log(resolvedPosts),
              resolvedPosts.data
                .filter((post) => post.important === true) // Filter posts to include only important ones
                .map((post) => (
                  <Card post={post} key={post.id} />
                ))
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Fav;
