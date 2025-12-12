import type React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo1.svg";
import { GrMenu } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CInput from "../../components/CInput";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { totalCount } = useCart();

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="header container">
        <div className="header__actions header__actions-desktop">
          <Link to={"/#"} className="header__actions__logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="header__search">
          <CInput placeholder="Поиск товаров..." fullWidth></CInput>
        </div>

        <nav className="header__navs header__navs-desktop">
          <NavLink to={"/#"}>
            <FaUser className="header__icon" />
            <span>Войти</span>
          </NavLink>

          <NavLink to={"/#"} className="header__cart">
            <span className="header__cartIcon">
              <MdShoppingBasket className="header__icon" />
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </span>
            <span>Корзина</span>
          </NavLink>
        </nav>

        <div className="header__actions header__actions-mobile">
          <Link to={"/home"} className="header__actions__logo">
            <img src={Logo} alt="Logo" />
          </Link>

          <button
            className="header__burger"
            aria-label="Открыть меню"
            onClick={() => setIsSidebarOpen(true)}
          >
            <GrMenu className="header__actions__icon" />
          </button>
        </div>
      </header>

      <div
        className={`overlay ${isSidebarOpen ? "overlay--open" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__top">
          <span className="sidebar__title">Меню</span>
          <button
            className="sidebar__close"
            aria-label="Закрыть меню"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar__navs">
          <NavLink to={"/home"} onClick={() => setIsSidebarOpen(false)}>
            <FaUser className="header__icon" />
            <span>Войти</span>
          </NavLink>

          <NavLink to={"/home"} onClick={() => setIsSidebarOpen(false)}>
            <MdShoppingBasket className="header__icon" />
            <span>Корзина</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Header;
