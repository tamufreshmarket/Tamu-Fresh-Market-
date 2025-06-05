import React from "react";
import clsx from "clsx"; // Optional but helpful

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => (
  <button
    className={clsx("px-4 py-2 rounded", className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);
