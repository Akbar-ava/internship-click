import type React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import { GrMenu } from "react-icons/gr";
import { FaUser } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';
import { useState } from "react";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return(
    <>
      <div className="header container">
        <div className="header__actions">
          <Link to={"/home"} className="header__actions__logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="header__navs">
          <NavLink to={"/home"}>
            <FaUser style={{ fontSize: '1.5rem', color: 'grey' }} />
             <span>Войти</span>
          </NavLink>

          <NavLink to={"/home"}>
            <MdShoppingBasket style={{ fontSize: '1.5rem', color: 'grey'}}  />
             <span>Корзина</span>
          </NavLink>
        </div>

        <div className="header__actions header__actions-mobile">
          <Link to={"/home"} className="header__actions__logo">
            <img src={Logo} alt="Logo" />
          </Link>

          <GrMenu
            className="header__actions__icon"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </div>
    </>
  )
};

export default Header;
