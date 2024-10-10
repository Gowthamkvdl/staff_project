import React from "react";
import "./home.css";
import Card from "../../components/card/Card";
import logo from "../../assets/logo.png";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="">
      <div className="header pt-2 d-flex gap-2  justify-content-center align-items-center">
        <div className="logo d-md-none">
          <img src={logo} className="img-fluid" alt="" />
        </div>
        <div className="text">
          <h1 className=" title-text d-md-none mb-0 mt-3 heading">
            SkillStream Academy
          </h1>
          <p className=" mt-0 d-md-none">By Shada Group</p>
        </div>
      </div>
      <hr className="w-75 mx-auto d-md-none" />
      <div className="searchBox d-flex align-items-center justify-content-center pt-2 pt-md-4">
        <div className="container-input">
          <input
            type="text"
            placeholder="Search Topics"
            name="text"
            className="input box-shadow"
          ></input>
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="listingSection mt-3">
        <div className="subtitle-text opacity-75">
          <span>What's New?</span>
        </div>
        <div className="cards">
          {posts.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
