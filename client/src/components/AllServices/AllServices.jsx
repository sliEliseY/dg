import React from "react";
import Slider from "react-slick";
import './AllServices.scss';
import '../Home/Gallery/Gallery.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
//***********************************************Все наши услуги********************************************
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.png';
import service6 from '../../images/service6.png';
import service7 from '../../images/service7.png';
import service8 from '../../images/service8.png';
import service11 from '../../images/service11.png';

const AllServices = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 826, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 3, // Количество слайдов при адаптации
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 768, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 2, // Количество слайдов при адаптации
          slidesToScroll: 2,
          dots: false
        },
      }
    ],
  };

  const {t} = useTranslation();

  return (
    <div id='allServices' className="gallery-wrapper">
      <div className="headings">
        <h1>{t("allOurServices")}</h1>
      </div>
      <div className="gallery-content">
        <Slider {...settings}>
            <div className="slide">
              <a href='/allServices/films'>
                <img src={service3} alt='Потолки' />
                <p className="image-description">{t("films")}</p> 
                {/* изменил ссылку, нужно ее добавить и вставить в перевод */}
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/polishing/'>
                <img src={service1} alt='Полировка' />
                <p className="image-description">{t('polishing')}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/cleaning/'>
                <img src={service2} alt='Химчистка' />
                <p className="image-description">{t("cleaning")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/ceilings/'>
                <img src={service6} alt='Потолки' />
                <p className="image-description">{t("ceilings")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/soundInsulation/'>
                <img src={service4} alt='Шумоизоляция' />
                <p className="image-description">{t("soundInsulation")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/ceramics/'>
                <img src={service5} alt='Крамика' />
                <p className="image-description">{t("ceramics")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/antiRain/'>
                <img src={service11} alt='Антидождь' />
                <p className="image-description">{t("antiRain")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/salon/'>
                <img src={service7} alt='Реставрация салона' />
                <p className="image-description">{t("salon")}</p>
              </a>
            </div>
            <div className="slide">
              <a href='/allServices/steeringWheel/'>
                <img src={service8} alt='Рули' />
                <p className="image-description">{t("steeringWheel")}</p>
              </a>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default AllServices;