import React from "react";
import "./Review.scss";

import review2 from "../../../images/review2.png";
import review1 from "../../../images/review1.png";

const Review = () => {
  const reviewsVar = [review2, review1];
  return (
    <div id='reviews' className="reviews-wrapper">
        <h1>Отзывы</h1>
      <div className="review">
        {reviewsVar.map((image, index) => (
          <div key={index}>
            <img src={image} className='image-container' alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review;