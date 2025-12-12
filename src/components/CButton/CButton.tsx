import type React from "react";
import "./CButton.css";
import type { CButtonProps } from "./CButton.types";

const CButton: React.FC<CButtonProps> = ({
  title,
  onClick,
  style,
  className
}) => {
  return (
    <button
    onClick={onClick}
    style={style}
    className={`cbtn ${className}`}
    >
      <span>{title}</span>
    </button>
  )
};

export default CButton;
