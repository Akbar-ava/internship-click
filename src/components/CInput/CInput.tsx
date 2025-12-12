import "./CInput.css";
import type { CInputProps } from "./CInput.types";
import { forwardRef } from "react";

const CInput = forwardRef<HTMLInputElement, CInputProps>(
  (
    {
      placeholder,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    return(
      <div className={`cinput-wrapper ${className || ""}`} style={style}></div>
    )
  }
)

export default CInput;
