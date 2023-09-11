import React from "react";
import "./Review.scss";

const Review = (props) => {
  return (
    <div id="reviews" className="reviews-wrapper">
      <h1>Отзывы</h1>
      <div className="review">
        {props.reviewimage.reviewsImages.map((i, index) => (
          <div key={index} className="image-container">
            <img src={i.image} alt="images" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
