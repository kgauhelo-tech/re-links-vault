import React, { useRef, useState } from "react";
import { TitleBar } from "../components/title-bar/TitleBar";
import { Sidebar } from "../components/side-bar.tsx/sidebar";
import { getMostRecentLink, type Link } from "../logic/logic";
import { MostRecentItem} from "../components/most-recent/MostRecent";

export const dashboard = () => {
  const searchRef = useRef(null);
  const mostRecentLink: Link = getMostRecentLink();
  const [isSelectionState, setIsSelectionState] = useState(false);

  return (
    <div className="">
      <MostRecentItem
        title={mostRecentLink.title}
        url={mostRecentLink.link}
        dateCreted={mostRecentLink.dateCreated.toISOString()}
      ></MostRecentItem>
      <TitleBar />
      <Sidebar
        selectionState={isSelectionState}
        onSearch={() => {}}
        onCreate={() => {}}
        onDelete={() => {}}
        onSelection={() => {}}
      ></Sidebar>
    </div>
  );
};
