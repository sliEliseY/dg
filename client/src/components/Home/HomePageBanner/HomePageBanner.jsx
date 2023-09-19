import React from "react";
import './HomePageBanner.scss';
// import {useMediaQuery} from 'react-responsive'
import { useTranslation } from 'react-i18next';


const HomePageBanner = () => {
  const { t } = useTranslation();
  return (
    <div className='banner'>
      <div className="headings">
        <div className='head'>
          <h1>{t("homePageBannerH1")}</h1>
          <h2>{t("homePageBannerH2")}</h2>
        </div>
        <div className="telegram-href">
          <a href='https://t.me/detailing_garage_md' className="desktop-link" target="_blank" rel="noreferrer">{t("connectionButton")}</a>
          <a href='tel:+37378640888' className="mobile-link" target="_blank" rel="noreferrer">{t("connectionButton")}</a>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;