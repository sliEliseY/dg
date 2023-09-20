import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo1 from '../../images/logo1.png';
import { NavLink } from "react-router-dom";
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import MobileCloseButton from './MobileCloseButton/MobileCloseButton';
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';



const Header = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setNav(!nav);
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

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Состояние для меню "Язык"

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const closeLanguageMenu = () => {
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos < currentScrollPos) {
        // Скроллинг вниз
        document.querySelector('.header-wrapper').classList.add('hidden');
      } else {
        // Скроллинг вверх
        document.querySelector('.header-wrapper').classList.remove('hidden');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

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
                {t('home')}
              </NavLink>
            </div>
            <div className="nav">
              <NavLink to='/aboutUs' onClick={handleMenuItemClick}>
                {t('aboutUs')}
              </NavLink>
            </div>
            <div className="dropdown">
              <div
                className="nav"
                onClick={toggleAllServices}
                onMouseEnter={handleMouseEnter}
              >
                {t('allServices')}
              </div>
              <div onMouseLeave={handleMouseLeave} className={`dropdown-content ${isAllServicesOpen ? 'open' : ''}`}>
                <NavLink to='/allServices/polishing/' onClick={handleMenuItemClick}>
                  {t('polishing')}
                </NavLink>
                <NavLink to='/allServices/cleaning/' onClick={handleMenuItemClick}>
                {t('cleaning')}
                </NavLink>
                <NavLink to='/allServices/ceilings/' onClick={handleMenuItemClick}>
                {t('ceilings')}
                </NavLink>
                <NavLink to='/allServices/soundInsulation/' onClick={handleMenuItemClick}>
                {t('soundInsulation')}
                </NavLink>
                <NavLink to='/allServices/ceramics/' onClick={handleMenuItemClick}>
                {t('ceramics')}
                </NavLink>
                <NavLink to='/allServices/antiRain/' onClick={handleMenuItemClick}>
                {t('antiRain')}
                </NavLink>
                <NavLink to='/allServices/salon/' onClick={handleMenuItemClick}>
                {t('salon')}
                </NavLink>
                <NavLink to='/allServices/steeringWheel/' onClick={handleMenuItemClick}>
                {t('steeringWheel')}
                </NavLink>
                <NavLink to='/#reviews' />
              </div>
            </div>
            <div className="nav">
              <a href='/#contacts' onClick={handleMenuItemClick}>
                {t('contacts')}
              </a>
            </div>
            <div className="nav">
            </div>
            <div className="dropdown">
              <div
                className="nav"
                onClick={toggleLanguageMenu}
                onMouseEnter={toggleLanguageMenu} // Открывает меню при наведении на "Язык"
              >
                {t('language')}
              </div>
              <ul
                onMouseLeave={closeLanguageMenu}
                className={`dropdown-content ${isLanguageMenuOpen ? 'open' : ''}`}
              >
                <li onClick={() => { i18n.changeLanguage('ru'); handleMenuItemClick(); }}>
                  {t('russian')}
                </li>
                <li onClick={() => { i18n.changeLanguage('en'); handleMenuItemClick(); }}>
                  {t('english')}
                </li>
                <li onClick={() => { i18n.changeLanguage('ro'); handleMenuItemClick(); }}>
                  {t('romanian')}
                </li>
              </ul>
              {/* <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option>Choose language</option>
                <option value="ru">Russian</option>
                <option value="en">English</option>
              </select> */}
            </div>
          </nav>
        </div>
        <div className="contacts" onClick={handleMenuItemClick}>
          <ul>
          <li><a href="tel:+37378640888">+373 78 640 888</a></li>
            <li>{t("balti")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
