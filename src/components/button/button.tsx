import type React from "react";
import "./button.css";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "tertiary" | "destructive" | "link" | "link-gray";
  size?: "md" | "lg" | "xl" | "2xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Icon-only button: pass the icon via `leftIcon`; children become the aria-label text */
  iconOnly?: boolean;
};

export default function Button({
  variant = "primary",
  size = "lg",
  leftIcon,
  rightIcon,
  iconOnly = false,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    leftIcon && !iconOnly && "button--leftIcon",
    rightIcon && !iconOnly && "button--rightIcon",
    iconOnly && "button--iconOnly",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      aria-label={
        iconOnly && typeof children === "string" ? children : undefined
      }
      {...rest}
    >
      {leftIcon && (
        <span className="button__icon" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {!iconOnly && children}
      {!iconOnly && rightIcon && (
        <span className="button__icon" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
