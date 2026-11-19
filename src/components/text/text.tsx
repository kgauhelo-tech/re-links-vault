import React from "react";
import styles from "./text.module.css";

type textType = {
  type?: "title" | "heading" | "paragraph" | "link";
  url?: string;
  children: React.ReactNode;
};

export const Text: React.FC<textType> = ({ type, children, url }) => {
  switch (type) {
    case "title":
      return <h1 className={styles.title}>{children}</h1>;

    case "heading":
      return <h2 className={styles.heading}>{children}</h2>;

    case "paragraph":
      return <p className={styles.paragraph}>{children}</p>;

    case "link":
      return (
        <a href={url} className={styles.paragraph}>
          {children}
        </a>
      );

    default:
      return <p className={styles.paragraph}>{children}</p>;
  }
};
