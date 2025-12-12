import { forwardRef } from "react";
import "./CInput.css";
import type { CInputProps } from "./CInput.types";

const CInput = forwardRef<HTMLInputElement, CInputProps>(
  ({ className, style, fullWidth, error, ...rest }, ref) => {
    const classes = [
      "cinput",
      fullWidth ? "cinput--full" : "",
      error ? "cinput--error" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return <input ref={ref} {...rest} style={style} className={classes} />;
  }
);

CInput.displayName = "CInput";

export default CInput;
