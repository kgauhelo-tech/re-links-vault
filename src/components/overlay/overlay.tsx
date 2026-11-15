import React from "react";
import styles from "./overlay.module.css";

type OverlayProps = {
  children: React.ReactNode;
};

export const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return <div className={styles.overlay}>{children}</div>;
};
