import React from "react";
import './HomePageBanner.scss';
// import {useMediaQuery} from 'react-responsive'

const HomePageBanner = () => {

  return (
    <div className='banner'>
      <div className="headings">
        <div className='head'>
          <h1>ПРОФЕССИОНАЛЬНЫЙ УХОД И ЗАЩИТА ВАШЕГО АВТОМОБИЛЯ</h1>
          <h2>СЕРВИС ПО УХОДУ И ЗАЩИТЕ АВТО В БЕЛЬЦАХ</h2>
        </div>
        <div className="telegram-href">
          <a href='https://t.me/detailing_garage_md' className="desktop-link" target="_blank" rel="noreferrer">Связаться с нами</a>
          <a href='tel:+37378640888' className="mobile-link" target="_blank" rel="noreferrer">Связаться с нами</a>
          {/* isMobile ? 'https://t.me/detailing_garage_md' :  */}
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;