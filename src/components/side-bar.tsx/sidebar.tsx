import { SearchBar } from "../search-bar/search-bar";
import { ItemContainer } from "./item-container";
import { Text } from "../text/text";
import styles from "./sidebar.module.css";
import { Add, Trash2 } from "reicon-react";

import { Button } from "../input/button";
import { useState } from "react";

export const Sidebar = () => {
  const [selectOn, setSelectOn] = useState(false);
  const handleSearch = () => {};

  const handleCreate = () => {};

  const handleDelete = () => {};
  const handleSelect = () => {
    setSelectOn(true);
  };

  return (
    <div className={styles["sidebar-container"]}>
      <ItemContainer title="Search Links">
        <SearchBar onSearch={handleSearch} />
      </ItemContainer>

      <ItemContainer title="Total Links">
        <Text type="title">0</Text>
      </ItemContainer>

      <ItemContainer>
        {selectOn ? (
          <Button type="delete" oncClick={handleDelete}>
            <span className={styles["button-content"]}>
              <Trash2 />
              Delete Selected
            </span>
          </Button>
        ) : (
          <Button oncClick={handleSelect} type="secondary">
            <span className={styles["button-content"]}>
              <Trash2 />
              Delete links
            </span>
          </Button>
        )}

        <Button oncClick={handleCreate}>
          <span className={styles["button-content"]}>
            <Add />
            Add link
          </span>
        </Button>
      </ItemContainer>
    </div>
  );
};
