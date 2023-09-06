// import React from "react";
// import "./Navbar.scss";
// import { NavLink } from "react-router-dom";
// import str from '../../images/str.png';

// const Navbar = () => {
//   return (
//     <nav className="navbar-wrapper">
//       <div className="nav">
//         <NavLink to=''>
//           Главная
//         </NavLink>
//       </div>
//       <div className="nav">
//         <NavLink to='/aboutUs'>
//           О нас
//         </NavLink>
//       </div>
//       <div className="dropdown">

//         <div className="nav">
//           <NavLink to=''>
//             Все услуги
//             <img src={str} alt="" />
//           </NavLink>
//         </div>

//         <div className="dropdown-content">
//           <NavLink to='/allServices/polishing/'>
//             Полировка
//           </NavLink>
//           <NavLink to='/allServices/cleaning/'>
//             Химчистка
//           </NavLink>
//           <NavLink to='/allServices/ceilings/'>
//             Потолки
//           </NavLink>
//           <NavLink to='/allServices/soundInsulation/'>
//             Шумооизоляция
//           </NavLink>
//           <NavLink to='/allServices/ceramics/'>
//             Крамика
//           </NavLink>
//           <NavLink to='/allServices/antiRain/'>
//             Антидождь
//           </NavLink>
//           <NavLink to='/allServices/salon/'>
//             Реставрация салона
//           </NavLink>
//           <NavLink to='/allServices/steeringWheel/'>
//             Рули
//           </NavLink>
//         </div>
//       </div>

//       {/* <AllServices /> */}

//       <div className="nav">
//         <NavLink to='/contacts'>
//           Контакты
//         </NavLink>
//       </div>
//       <div className="nav">
//         <NavLink to='/language'>
//           Язык:
//         </NavLink>
//       </div>
//     </nav>
//   )
// };

// export default Navbar;