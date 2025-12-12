import type React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main-info">
          <p>
            77 Маркетплейс — электронная платформа в Узбекистане, с помощью
            которой совершаются онлайн-покупки.
          </p>
        </div>

        <div className="break__line" />

        <div className="footer__bottom-info">
          <p>
            <FaCopyright />
            {new Date().getFullYear()} 77 MarketPlace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;