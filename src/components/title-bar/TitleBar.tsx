import styles from "./TitleBar.module.css";
import { Text } from "../text/text";
import React from "react";

export const TitleBar = () => {
  return (
    <div className={styles["title-bar"]}>
      <Text type="title">Links Vault</Text>
    </div>
  );
};
