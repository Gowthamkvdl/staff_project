import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./card.css";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className="infoCard bg-light rounded-4 box-shadow mx-1 mt-4 p-3">
      <div className="upperSection">
        <div className="details">
          <div className="title fs-5 fw-medium">
            <span>{post.title}</span>
          </div>
        </div>
        <div className="infoImg d-flex my-2">
          <img
            className="img-fluid pdf-img rounded-4"
            src={`../../public/pdfs/${post.thumbnail}`}
            alt=""
          />
        </div>
        <div className="dateAndBtn d-flex align-items-center justify-content-between">
          <div className="date opacity-75">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </div>
          <div className="btns d-flex">
            <a href={post.link} target="_blank" className="link">
              <div className="btn me-2 primary-500 text-white d-flex flex-row align-items-center justify-content-center">
                <span className="material-symbols-outlined me-1">
                  play_circle
                </span>
                <span>Link</span>
              </div>
            </a>
            <a
              target="_blank"
              href={`../../public/pdfs/${post.pdf}`}
              className="link"
            >
              <div className="btn btn-secondary d-flex flex-row align-items-center justify-content-center">
                <span className="material-symbols-outlined me-1">
                  dictionary
                </span>
                <span>PDF</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="lowerSection"></div>
    </div>
  );
};

export default Card;
