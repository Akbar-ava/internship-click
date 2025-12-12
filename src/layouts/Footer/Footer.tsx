import type React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer container">
      <div className="footer__main-info">
        <p>
          77 маркетплейс - электронная платформа в Узбекистане, с помощью
          которой соверщаются онлайн покупки
        </p>
      </div>

      <div className="break__line"></div>

      <div className="footer__bottom-info">
        <p>
          <FaCopyright size={"1.2rem"} />
          {new Date().getFullYear()} 77 MarketPlace. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
