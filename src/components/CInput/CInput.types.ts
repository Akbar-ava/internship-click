import type React from "react";
import type { InputHTMLAttributes } from "react";

export interface CInputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  className?: string;
}
