import React from "react";
import "./MobileMenuButton.scss";
import { AiOutlineMenu } from "react-icons/ai";

const MobileMenuButton = ({onClick}) => {
  return(
    <div onClick={onClick} className="mobile__menu__btn">
      <AiOutlineMenu size={40} />
    </div>
  )
}

export default MobileMenuButton;
