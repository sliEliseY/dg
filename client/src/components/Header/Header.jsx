import React, { useState } from "react";
import "./Header.scss";
import logo1 from '../../images/logo1.png';
import { NavLink } from "react-router-dom";
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import MobileCloseButton from './MobileCloseButton/MobileCloseButton';
import { useSwipeable } from 'react-swipeable';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setNav(false);
    setIsAllServicesOpen(false); // Закрывает и бургер меню, и выпадающее меню
  };

  const handleMenuItemClick = () => {
    closeMenu(); // Закрывает меню при клике на любую ссылку
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: closeMenu
  });

  const toggleAllServices = () => {
    setIsAllServicesOpen(!isAllServicesOpen);
  };

  // Функция для обработки наведения на больших экранах
  const handleMouseEnter = () => {
    if (window.innerWidth >= 826) {
      setIsAllServicesOpen(true);
    }
  };

  // Функция для обработки ухода с наведения на больших экранах
  const handleMouseLeave = () => {
    if (window.innerWidth >= 826) {
      setIsAllServicesOpen(false);
    }
  };

  return (
    <>
      <div className='header-wrapper'>
        <div className="wrapper">
          <img src={logo1} alt="" />
          <MobileMenuButton onClick={() => setNav(!nav)} />
          <nav className={nav ? 'navbar-wrapper active' : 'navbar-wrapper'} {...swipeHandlers}>
            <MobileCloseButton onClick={() => setNav(!nav)} />
            <div onClick={handleClick} className='nav'>
              <NavLink to='' onClick={handleMenuItemClick}>
                Главная
              </NavLink>
            </div>
            <div className="nav">
              <NavLink to='/aboutUs' onClick={handleMenuItemClick}>
                О нас
              </NavLink>
            </div>
            <div className="dropdown">
              <div
                className="nav"
                onClick={toggleAllServices}
                onMouseEnter={handleMouseEnter}
              >
                Все услуги -
              </div>
              <div onMouseLeave={handleMouseLeave} className={`dropdown-content ${isAllServicesOpen ? 'open' : ''}`}>
                <NavLink to='/allServices/polishing/' onClick={handleMenuItemClick}>
                  Полировка
                </NavLink>
                <NavLink to='/allServices/cleaning/' onClick={handleMenuItemClick}>
                  Химчистка
                </NavLink>
                <NavLink to='/allServices/ceilings/' onClick={handleMenuItemClick}>
                  Потолки
                </NavLink>
                <NavLink to='/allServices/soundInsulation/' onClick={handleMenuItemClick}>
                  Шумооизоляция
                </NavLink>
                <NavLink to='/allServices/ceramics/' onClick={handleMenuItemClick}>
                  Крамика
                </NavLink>
                <NavLink to='/allServices/antiRain/' onClick={handleMenuItemClick}>
                  Антидождь
                </NavLink>
                <NavLink to='/allServices/salon/' onClick={handleMenuItemClick}>
                  Реставрация салона
                </NavLink>
                <NavLink to='/allServices/steeringWheel/' onClick={handleMenuItemClick}>
                  Рули
                </NavLink>
                <NavLink to='/#reviews' />
              </div>
            </div>
            <div className="nav">
              <a href='/#contacts' onClick={handleMenuItemClick}>
                Контакты
              </a>
            </div>
            <div className="nav">
            </div>
            <div className="nav">
              <NavLink to='/language' onClick={handleMenuItemClick}>
                Язык:
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="contacts" onClick={handleMenuItemClick}>
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
