import React from "react";
import "./MobileCloseButton.scss"
import { AiOutlineClose } from 'react-icons/ai';

const MobileCloseButton = ({onClick}) => {
  return(
    <div onClick={onClick} className="mobile__close__btn">
      <AiOutlineClose size={30} />
    </div>
  )
}

export default MobileCloseButton;