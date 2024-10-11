import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../card/card.css";

const CardSkeleton = ({ NoOfCards }) => {
  return Array(NoOfCards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="infoCard bg-light rounded-4 box-shadow mx-1 mt-4 p-3"
      >
        <div className="upperSection">
          <div className="details">
            <div className="title fs-5 fw-medium">
              <Skeleton width={200} />
            </div>
          </div>
          <div className="infoImg d-flex my-2">
            <Skeleton
              className="img-fluid pdf-img rounded-4"
              width={300}
              height={200}
            />
          </div>
          <div className="dateAndBtn d-flex align-items-center justify-content-between">
            <div className="date opacity-75">
              <Skeleton width={100} />
            </div>
            <div className="btns d-flex">
              <Skeleton width={70} height={40} className="me-2" />
              <Skeleton width={70} height={40} />
            </div>
          </div>
        </div>
        <div className="lowerSection"></div>
      </div>
    ));
};

export default CardSkeleton;
