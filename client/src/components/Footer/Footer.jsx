import React from "react";
import './Footer.scss';
import logo4 from '../../images/logo4.png';
import instagram from '../../images/instagram.png';
import tiktok from '../../images/tiktok.png';
import youtube from '../../images/youtube.png';
import whatsapp from '../../images/whatsapp.png';
import telegram from '../../images/telegram.png';

const Footer = () => {
  return (
    <div id='contacts' className='footer-wrapper'>
      <div className="footer">
        <h2>Контакты</h2>
        <img src={logo4} alt="" />
        <p>Бельцы, ул.Карасёва 98</p>
        <a href="tel:+37378640888">+373 78 640 888</a>
        <p>© 2023 DETAILING GARAGE</p>
      </div>
      <div className="we-in">
        <h2>Мы в соцсетях</h2>
        <a href="https://instagram.com/detailing_garage.md?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
        <a href="https://www.tiktok.com/@detailing_garage.md" target="_blank" rel="noreferrer"><img src={tiktok} alt="" /></a>
        <a href="https://www.youtube.com/@DetailingGarageMD" target="_blank" rel="noreferrer"><img src={youtube} alt="" /></a>
        <a href="https://api.whatsapp.com/send?phone=37378640888&text=" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" /></a>
        <a href="https://t.me/detailing_garage_md" target="_blank" rel="noreferrer"><img src={telegram} alt="" /></a>
      </div>
    </div>
  );
}

export default Footer;