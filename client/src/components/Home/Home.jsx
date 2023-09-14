import React from "react";
import './Home.scss';
import Gallery from './Gallery/Gallery';
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import Review from "./Reviews/Review";
import AllServices from "../AllServices/AllServices";

const Home = (props) => {

  return (
    <div>
      <HomePageBanner />
      <AllServices serviceImage={props.state} />
      <Gallery galleryImage={props.state} />
      <Review reviewimage={props.state} />
    </div>
  );
}

export default Home; 