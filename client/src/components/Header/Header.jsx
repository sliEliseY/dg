import React, { useState } from "react";
import "./Header.scss";
import logo1 from '../../images/logo1.png';
import { NavLink } from "react-router-dom";
// import str from '../../images/str.png';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import MobileCloseButton from './MobileCloseButton/MobileCloseButton';
import { useSwipeable } from 'react-swipeable';



const Header = () => {
     
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: closeMenu
  });

  return (
    <>
      <div className='header-wrapper'>
        <div className="wrapper">
          <img src={logo1} alt="" />
          <MobileMenuButton onClick={() => setNav(!nav)} />

          <nav className={nav ? 'navbar-wrapper active' : 'navbar-wrapper'} onClick={closeMenu} {...swipeHandlers}>
            <MobileCloseButton onClick={() => setNav(!nav)} />
            <div onClick={handleClick} className='nav'>
              <NavLink to='' onClick={closeMenu}>
                Главная
              </NavLink>
            </div>
            <div className="nav">
              <NavLink to='/aboutUs' onClick={closeMenu}>
                О нас
              </NavLink>
            </div>
            <div className="dropdown">
              <div className="nav">
                <a href='/#allServices'>
                  Все услуги -
                  {/* <img src={str} alt="" /> */}
                </a>
              </div>
              <div className="dropdown-content">
                <NavLink to='/allServices/polishing/' onClick={closeMenu}>
                  Полировка
                </NavLink>
                <NavLink to='/allServices/cleaning/' onClick={closeMenu}>
                  Химчистка
                </NavLink>
                <NavLink to='/allServices/ceilings/' onClick={closeMenu}>
                  Потолки
                </NavLink>
                <NavLink to='/allServices/soundInsulation/' onClick={closeMenu}>
                  Шумооизоляция
                </NavLink>
                <NavLink to='/allServices/ceramics/' onClick={closeMenu}>
                  Крамика
                </NavLink>
                <NavLink to='/allServices/antiRain/' onClick={closeMenu}>
                  Антидождь
                </NavLink>
                <NavLink to='/allServices/salon/' onClick={closeMenu}>
                  Реставрация салона
                </NavLink>
                <NavLink to='/allServices/steeringWheel/' onClick={closeMenu}>
                  Рули
                </NavLink>
                <NavLink to='/#reviews' />
              </div>
            </div>
            <div className="nav">
              <a href='/#contacts' onClick={closeMenu}>
                Контакты
              </a>
            </div>
            <div className="nav">
            </div>
            <div className="nav">
              <NavLink to='/language' onClick={closeMenu}>
                Язык:
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="contacts" onClick={closeMenu}>
          <ul>
            <li>+373 78 640 888</li>
            <li>Бельцы, ул.Карасёва 98</li>
          </ul>
        </div>
      </div>
    </>
    
  );
};

export default Header;