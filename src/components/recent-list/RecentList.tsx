import React from "react";
import styles from "./RecentList.module.css";
import { getRecentLinks, type Link } from "../../logic/logic";
import { Text } from "../text/text";
import { ArrowUpRight } from "reicon-react";

export const RecentList: React.FC = () => {
  const mostRecentLinks: Link[] = getRecentLinks();
  // if (mostRecentLinks.length === 0) {
  //   return (
  //     <div className={styles["list-item-container"]}>
  //       <div className={styles["text-container"]}></div>
  //       <Text type="heading">Recent Links</Text>
  //       <div className={styles["view-links"]}>
  //         <Text>View All Links</Text>
  //       </div>
  //       <Text>Add items to the list to see your most recent links</Text>
  //     </div>
  //   );
  // }

  return (
    <div className={styles["list-item-container"]}>
      {mostRecentLinks.map((link) => {
        return (
          <div className={styles["list-item"]}>
            <Text>{link.title}</Text>
            <ArrowUpRight />
          </div>
        );
      })}
    </div>
  );
};
