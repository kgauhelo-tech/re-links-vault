import React, { type ReactNode } from "react";
import styles from "./sidebar.module.css";
import { Text } from "../text/text";

type ItemContainerProps = {
  title?: string;
  children: React.ReactNode;
};
export const ItemContainer: React.FC<ItemContainerProps> = ({
  title,
  children,
}) => {
  return !title ? (
    <div className={styles["item-container"]}>{children}</div>
  ) : (
    <div className={styles["item-container"]}>
      <Text type="heading">{title}</Text>
      {children}
    </div>
  );
};
