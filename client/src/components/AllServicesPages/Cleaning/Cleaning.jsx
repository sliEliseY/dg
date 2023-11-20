import React from "react";
import "./Cleaning.scss";
import Golf from "../../../images/Golf.png";
import Jetta from "../../../images/Jetta.png";
import Touran from "../../../images/Touran.png";
import Tiguran from "../../../images/Tiguran.png";
import { useTranslation } from 'react-i18next';

const Cleaning = (props) => {
const {t} = useTranslation();
  return (<>
{/* *****************CLEANING****************** */}
    <div className="polishing-wrapper">
      <h1>{t('cleaningPage')}:</h1>
      <div className="service-description">
        <h2>{t('serviceIncludes')}</h2>
        <hr />
        <ul>
          <li>{t('cleaning1')}</li>
          <li>{t('cleaning2')}</li>
          <li>{t('cleaning3')}</li>
          <li>{t('cleaning4')}</li>
          <li>{t('cleaning5')}</li>
          <li>{t('cleaning6')}</li>
          <li>{t('cleaning7')}</li>
          <li>{t('cleaning8')}</li>
          <li>{t('cleaning9')}</li>
        </ul>
      </div>
      <div className="classes">
        <div className="golf-prices-class">
          <h3>I {t('class')}</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>от {props.prices.cleaning[0].firstClass} MDL</h4>
        </div>
        <div className="jetta-prices-class">
          <h3>II {t('class')}</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>от {props.prices.cleaning[1].secondClass} MDL</h4>
        </div>
        <div className="touran-prices-class">
          <h3>III {t('class')}</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>от {props.prices.cleaning[2].thirdClass} MDL</h4>
        </div>
        <div className="tiguran-prices-class">
          <h3>IV {t('class')}</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>от {props.prices.cleaning[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>

{/* *****************CLEANING EXpress****************** */}
    <div className="polishing-wrapper">
      <h1>{t('expressCleaningPage')}:</h1>
      <div className="service-description">
        <h2>{t('serviceIncludes')}</h2>
        <hr />
        <ul>
          <li>{t('eCleaning1')}</li>
          <li>{t('eCleaning2')}</li>
          <li>{t('eCleaning3')}</li>
          <li>{t('eCleaning4')}</li>
          <li>{t('eCleaning5')}</li>
          <li>{t('eCleaning6')}</li>
        </ul>
      </div>
      <div className="classes">
        <div className="golf-prices-class">
          <h3>I {t('class')}</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>от {props.prices.cleaningExpress[0].firstClass} MDL</h4>
        </div>
        <div className="jetta-prices-class">
          <h3>II {t('class')}</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>от {props.prices.cleaningExpress[1].secondClass} MDL</h4>
        </div>
        <div className="touran-prices-class">
          <h3>III {t('class')}</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>от {props.prices.cleaningExpress[2].thirdClass} MDL</h4>
        </div>
        <div className="tiguran-prices-class">
          <h3>IV {t('class')}</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>от {props.prices.cleaningExpress[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>
  </>
  );
}

export default Cleaning;