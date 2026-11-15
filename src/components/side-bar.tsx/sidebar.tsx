import { SearchBar } from "../search-bar/search-bar";
import { ItemContainer } from "./item-container";
import { Text } from "../text/text";
import styles from "./sidebar.module.css";
import { Add, Trash2 } from "reicon-react";

import { Button } from "../input/button";

type SidebarProps = {
  onSearch: () => void;
  onCreate: () => void;
  onSelection: () => void;
  onDelete: () => void;
  selectionState: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({
  onCreate,
  onSearch,
  onSelection,
  onDelete,
  selectionState,
}) => {
  return (
    <div className={styles["sidebar-container"]}>
      <ItemContainer title="Search Links">
        <SearchBar onSearch={onSearch} />
      </ItemContainer>

      <ItemContainer title="Total Links">
        <Text type="title">0</Text>
      </ItemContainer>

      <ItemContainer>
        {selectionState ? (
          <Button type="delete" oncClick={onDelete}>
            <span className={styles["button-content"]}>
              <Trash2 />
              Delete Selected
            </span>
          </Button>
        ) : (
          <Button oncClick={onSelection} type="secondary">
            <span className={styles["button-content"]}>
              <Trash2 />
              Delete links
            </span>
          </Button>
        )}

        <Button oncClick={onCreate}>
          <span className={styles["button-content"]}>
            <Add />
            Add link
          </span>
        </Button>
      </ItemContainer>
    </div>
  );
};
