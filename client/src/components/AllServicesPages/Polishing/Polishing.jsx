import React from "react";
import "./Polishing.scss";
import Golf from "../../../images/Golf.png";
import Jetta from "../../../images/Jetta.png";
import Touran from "../../../images/Touran.png";
import Tiguran from "../../../images/Tiguran.png";

const Polishing = (props) => {

  return (<>
  {/* *****************************АБРАЗИВНАЯ ПОЛИРОВКА***************************** */}
    <div className="abrazive-polishing-wrapper">
      <h1>АБРАЗИВНАЯ ПОЛИРОВКА:</h1>
      <div className="service-description">
        <h2>В УСЛУГУ ВХОДИТ: </h2>
        <hr />
        <ul>
          <li>Очистка кузова автомобиля синтетической глиной</li>
          <li>Профессиональная полировка кузова автомобиля </li>
          <li>Устранение царапин на кузове автомобиля</li>
          <li>Удаление голограмм</li>
          <li>Очистка автомобиля от остатков полировальной пасты</li>
          <li>Нанесение твердого воска</li>
          <li>Чернение покрышек</li>
        </ul>
      </div>
      <div className="classes">
        <div className="prices-class">
          <h3>1 класс</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>{props.prices.abrazivePolishing[0].firstClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>2 класс</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>{props.prices.abrazivePolishing[1].secondClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>3 класс</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>{props.prices.abrazivePolishing[2].thirdClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>4 класс</h3>
          <hr />
          <img className="tiguran" src={Tiguran} alt="image4" />
          <h4>{props.prices.abrazivePolishing[3].fourthClass} MDL</h4>
        </div>
      </div>
    </div>

{/* *********************************МЯГКАЯ ПОЛИРОВКА******************************* */}
    <div className="soft-polishing-wrapper">
      <h1>МЯГКАЯ ПОЛИРОВКА:</h1>
      <div className="service-description">
        <h2>В УСЛУГУ ВХОДИТ: </h2>
        <hr />
        <ul>
          <li>Профессиональная полировка кузова автомобиля</li>
          <li>Устранение паутины и придание блеска автомобилю</li>
          <li>Удаление голограмм</li>
          <li>Очистка автомобиля от остатков полировальной пасты</li>
          <li>Нанесение твердого воска</li>
          <li>Чернение покрышек</li>
        </ul>
      </div>
      <div className="classes">
        <div className="prices-class">
          <h3>1 класс</h3>
          <hr />
          <img className="golf" src={Golf} alt="image1" />
          <h4>{props.prices.softPolishing[0].firstClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>2 класс</h3>
          <hr />
          <img className="jetta" src={Jetta} alt="image2" />
          <h4>{props.prices.softPolishing[1].secondClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>3 класс</h3>
          <hr />
          <img className="touran" src={Touran} alt="image3" />
          <h4>{props.prices.softPolishing[2].thirdClass} MDL</h4>
        </div>
        <div className="prices-class">
          <h3>4 класс</h3>
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