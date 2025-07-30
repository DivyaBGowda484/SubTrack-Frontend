// src/components/ui/Button.jsx
import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ children, className, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
