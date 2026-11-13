import React from "react";
import styles from "./text.module.css";

type textType = {
  type?: "title" | "heading" | "paragraph";
  children: React.ReactNode;
};

export const Text: React.FC<textType> = ({ type, children }) => {
  switch (type) {
    case "title":
      return <h1 className={styles.title}>{children}</h1>;

    case "heading":
      return <h2 className={styles.heading}>{children}</h2>;

    case "paragraph":
      return <p className={styles.paragraph}>{children}</p>;

    default:
      return <p className={styles.paragraph}>{children}</p>;
  }
};
