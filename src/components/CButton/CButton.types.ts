import type React from "react";

export interface CButtonProps {
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}
