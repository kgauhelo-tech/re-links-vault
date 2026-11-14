import React from "react";
import "./input.css";

type buttonProps = {
  children: React.ReactNode;
  type?: "delete" | "primary" | "secondary";
};

export const Button: React.FC<buttonProps> = ({ children, type }) => {
  switch (type) {
    case "delete":
      return <button className="delete">{children}</button>;

    case "primary":
      return <button className="primary">{children}</button>;

    case "secondary":
      return <button className="secondary">{children}</button>;

    default:
    case "primary":
      return <button className="primary">{children}</button>;
  }
};
