import React from "react";
import "./AntiRain.scss";
import Golf from "../../../images/Golf.png";
import Jetta from "../../../images/Jetta.png";
import Touran from "../../../images/Touran.png";
import Tiguran from "../../../images/Tiguran.png";
import { useTranslation } from "react-i18next";

const AntiRain = (props) => {
  const {t} = useTranslation();

  return (<>
    {/* *****************************АБРАЗИВНАЯ ПОЛИРОВКА***************************** */}
    <div className="polishing-wrapper">
      <h1>{t('antiRainPage')}:</h1>
      <div className="service-description">
        <h2>{t('serviceIncludes')}</h2>
        <hr />
        <ul>
          <li>{t('antiRain1')}</li>
          <li>{t('antiRain2')}</li>
          <li>{t('antiRain3')}</li>
          <li>{t('antiRain4')}</li>
        </ul> 
      </div>
      <div className="classes">
        <div className="golf-prices-class">
          <h3>I {t('class')}</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>{props.prices.antiRain[0].firstClass} MDL</h4>
        </div>
        <div className="jetta-prices-class">
          <h3>II {t('class')}</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>{props.prices.antiRain[1].secondClass} MDL</h4>
        </div>
        <div className="touran-prices-class">
          <h3>III {t('class')}</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>{props.prices.antiRain[2].thirdClass} MDL</h4>
        </div>
        <div className="tiguran-prices-class">
          <h3>IV {t('class')}</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>{props.prices.antiRain[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>
  </>
  );
}

export default AntiRain;