import React, { useRef, useState } from "react";
import { TitleBar } from "../components/title-bar/TitleBar";
import { Sidebar } from "../components/side-bar.tsx/sidebar";
import { getMostRecentLink, type Link } from "../logic/logic";
import { MostRecentItem } from "../components/most-recent/MostRecent";
import styles from "./dashboard.module.css";

export const dashboard = () => {
  // const [isCreateOverlayOn, setIsCreateOverlayOn] = useState(false);
  // const searchRef = useRef(null);
  // const mostRecentLink: Link = getMostRecentLink();
  const mostRecentItem: Link = getMostRecentLink();
  const [isSelectionState, setIsSelectionState] = useState(false);

  return (
    <div className={styles["layout-container"]}>
      <div className={styles["left-column"]}>
        {mostRecentItem ? (
          <MostRecentItem
            title={mostRecentItem.title}
            url={mostRecentItem.link}
            description={mostRecentItem.description}
          ></MostRecentItem>
        ) : (
          <MostRecentItem
            title="Store links to see your most recent link here"
            url=""
            description=""
          />
        )}
      </div>
      <div className={styles["right-column"]}>
        <Sidebar
          onSearch={() => {}}
          onCreate={() => {}}
          onDelete={() => {}}
          onSelection={() => {}}
          selectionState={isSelectionState}
        ></Sidebar>
      </div>
    </div>
  );
};
