import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import './AllServices.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.png';
import service6 from '../../images/service6.png';
import service7 from '../../images/service7.png';
import service8 from '../../images/service8.png';

const AllServices = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 826, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 3, // Количество слайдов при адаптации
          slidesToScroll: 2,
          dots: false
        }
      }
    ],
  };

  const galleryImages = [
    { image: service1, description: 'Полировка', path: '/allServices/polishing/' },
    { image: service2, description: 'Химчистка', path: '/allServices/cleaning/' },
    { image: service3, description: 'Потолки', path: '/allServices/ceilings/' },
    { image: service4, description: 'Шумооизоляция', path: '/allServices/soundInsulation/' },
    { image: service5, description: 'Крамика', path: '/allServices/ceramics/' },
    { image: service6, description: 'Антидождь', path: '/allServices/antiRain/' },
    { image: service7, description: 'Реставрация салона', path: '/allServices/salon/' },
    { image: service8, description: 'Рули', path: '/allServices/steeringWheel/' }
  ];

  return (
    <div id='allServices' className="gallery-wrapper">
      <div className="headings">
        <h1>Все наши услуги</h1>
      </div>
      <div className="gallery-content">
        <Slider {...settings}>
          {galleryImages.map((item, index) => (
            <div key={index} className="slide">
              <NavLink to={item.path}>
                <img src={item.image} alt={item.description}/>
                <p className="image-description">{item.description}</p>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllServices;