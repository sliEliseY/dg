import React from "react";
import './HomePageBanner.scss';
// import {useMediaQuery} from 'react-responsive'
import { useTranslation } from 'react-i18next';
//***************************************************иконки поменять****************************************
import instagram from '../../../images/instagram.png';
import tiktok from '../../../images/tiktok.png';
import youtube from '../../../images/youtube.png';
import whatsapp from '../../../images/whatsapp.png';
import telegram from '../../../images/telegram.png';


const HomePageBanner = () => {
  const { t } = useTranslation();
  return (
    <div className='banner'>
      <div className="headings">
        <div className='head'>
          <h1>{t("homePageBannerH1")}</h1>
          <h2>{t("homePageBannerH2")}</h2>
        </div>
        <div className="connected">
          <div className="telegram-href">
            <a href='https://t.me/detailing_garage_md' className="desktop-link" target="_blank" rel="noreferrer">{t("connectionButton")}</a>
            <a href='tel:+37378640888' className="mobile-link" target="_blank" rel="noreferrer">{t("telNumber")}</a>
          </div>
          <div className="we-in">
            <a href="https://instagram.com/detailing_garage.md?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
            <a href="https://www.tiktok.com/@detailing_garage.md" target="_blank" rel="noreferrer"><img src={tiktok} alt="" /></a>
            <a href="https://www.youtube.com/@DetailingGarageMD" target="_blank" rel="noreferrer"><img src={youtube} alt="" /></a>
            <a href="https://api.whatsapp.com/send?phone=37378640888&text=" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" /></a>
            <a href="https://t.me/detailing_garage_md" target="_blank" rel="noreferrer"><img src={telegram} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;