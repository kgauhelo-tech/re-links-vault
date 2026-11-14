import React from "react";
import "./input.css";

type buttonProps = {
  children: React.ReactNode;
  type?: "delete" | "primary" | "secondary";
  oncClick: () => void;
};

export const Button: React.FC<buttonProps> = ({ children, type, oncClick }) => {
  switch (type) {
    case "delete":
      return (
        <button onClick={oncClick} className="delete">
          {children}
        </button>
      );

    case "primary":
      return (
        <button onClick={oncClick} className="primary">
          {children}
        </button>
      );

    case "secondary":
      return (
        <button onClick={oncClick} className="secondary">
          {children}
        </button>
      );

    default:
      return (
        <button onClick={oncClick} className="primary">
          {children}
        </button>
      );
  }
};
