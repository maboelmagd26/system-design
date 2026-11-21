import type React from "react";
import "./badge.css";
type BadgeProps = {
  variant: "success" | "error" | "neutral" | "warning" | "brand";
  size: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export default function Badge({
  variant = "neutral",
  className = "",
  size = "md",
  children,
}: BadgeProps) {
  return (
    <span
      className={`badge badge--${variant} badge--${size} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
