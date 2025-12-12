import type React from "react";
import type { InputHTMLAttributes } from "react";

export interface CInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  error?: boolean;
}
