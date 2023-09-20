import React from "react";
import "./Review.scss";
import { useTranslation } from "react-i18next";

const Review = (props) => {
  const {t} = useTranslation();
  return (
    <div id="reviews" className="reviews-wrapper">
      <h1>{t("reviews")}</h1>
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
