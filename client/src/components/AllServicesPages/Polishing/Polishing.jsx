import React from "react";
import "./Polishing.scss";
import Golf from "../../../images/Golf.png";
import Jetta from "../../../images/Jetta.png";
import Touran from "../../../images/Touran.png";
import Tiguran from "../../../images/Tiguran.png";
import { useTranslation } from 'react-i18next';

const Polishing = (props) => {
  const {t} = useTranslation();

  return (<>
  {/* *****************************АБРАЗИВНАЯ ПОЛИРОВКА***************************** */}
    <div className="polishing-wrapper">
      <h1>{t('abrazivePolishing')}:</h1>
      <div className="service-description">
        <h2>{t('serviceIncludes')}</h2>
        <hr />
        <ul>
          <li>{t('aPolishing1')}</li>
          <li>{t('aPolishing2')}</li>
          <li>{t('aPolishing3')}</li>
          <li>{t('aPolishing4')}</li>
          <li>{t('aPolishing5')}</li>
          <li>{t('aPolishing6')}</li>
          <li>{t('aPolishing7')}</li>
        </ul>
      </div>
      <div className="classes">
        <div className="golf-prices-class">
          <h3>I {t('class')}</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>{props.prices.abrazivePolishing[0].firstClass} MDL</h4>
        </div>
        <div className="jetta-prices-class">
          <h3>II {t('class')}</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>{props.prices.abrazivePolishing[1].secondClass} MDL</h4>
        </div>
        <div className="touran-prices-class">
          <h3>III {t('class')}</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>{props.prices.abrazivePolishing[2].thirdClass} MDL</h4>
        </div>
        <div className="tiguran-prices-class">
          <h3>IV {t('class')}</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>{props.prices.abrazivePolishing[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>

{/* *********************************МЯГКАЯ ПОЛИРОВКА******************************* */}
    <div className="polishing-wrapper">
      <h1>{t('softPolishing')}:</h1>
      <div className="service-description">
        <h2>{t('serviceIncludes')}</h2>
        <hr />
        <ul>
          <li>{t('sPolishing1')}</li>
          <li>{t('sPolishing2')}</li>
          <li>{t('sPolishing3')}</li>
          <li>{t('sPolishing4')}</li>
          <li>{t('sPolishing5')}</li>
          <li>{t('sPolishing6')}</li>
        </ul>
      </div>
      <div className="classes">
        <div className="golf-prices-class">
          <h3>I {t('class')}</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>{props.prices.softPolishing[0].firstClass} MDL</h4>
        </div>
        <div className="jetta-prices-class">
          <h3>II {t('class')}</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>{props.prices.softPolishing[1].secondClass} MDL</h4>
        </div>
        <div className="touran-prices-class">
          <h3>III {t('class')}</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>{props.prices.softPolishing[2].thirdClass} MDL</h4>
        </div>
        <div className="tiguran-prices-class">
          <h3>IV {t('class')}</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>{props.prices.softPolishing[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>
  </>
  );
}

export default Polishing;