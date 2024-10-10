import React from 'react'
import Card from '../../components/card/Card';
import { useLoaderData } from 'react-router-dom';

const Fav = () => {

  const posts = useLoaderData();   
  console.log(posts)
  return (
    <div>
      <div className="header mt-2 d-flex flex-column">
        <span className="title-text heading">Featured Topics</span>
        <span className="opacity-75">
          Highlighted topics will be available here.
        </span>
      </div>

      <div className="cards">
        {posts
          .filter((post) => post.important === true) // Filter posts to include only important ones
          .map((post) => (
            <Card post={post} key={post.id} />
          ))}
      </div>
    </div>
  );
}

export default Fav