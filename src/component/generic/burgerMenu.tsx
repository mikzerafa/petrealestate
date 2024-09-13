import React, { useState } from 'react';
import '../../css/BurgerMenu.css'; // Import the CSS file for styling
;
const BurgerMenu = (menus:JSX.Element) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        {menus}
      </div>
    </div>
  );
};

export default {
    BurgerMenu
}
