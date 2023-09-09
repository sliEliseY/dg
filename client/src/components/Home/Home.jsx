import React from "react";
import './Home.scss';
import Gallery from './Gallery/Gallery';
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import Review from "./Reviews/Review";
import AllServices from "../AllServices/AllServices";
import service1 from "../../images/service1.png"
import service2 from "../../images/service2.png"
import service3 from "../../images/service3.png"
import service4 from "../../images/service4.png"
import service5 from "../../images/service5.png"

const Home = ( props ) => {
  return (
    <div className="home-app-wrapper">
      <HomePageBanner />
      <div className="all-services-wrapper">
      </div>
      <AllServices images={[
        service1, service2, service3, service4, service5
      ]}/>
      <Gallery />
      <Review />
    </div>
  );
}

export default Home; 