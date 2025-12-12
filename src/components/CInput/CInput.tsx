import React, { forwardRef } from "react";
import "./CInput.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const CInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} className={`cinput ${props.className ?? ""}`} />;
});

export default CInput;
