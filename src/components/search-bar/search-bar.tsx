import { Search } from "reicon-react";
import styles from "./search-bar.module.css";

type SearchBarProps = {
  onSearch: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search links"
        className={styles["search-input"]}
      />
      <Search onClick={onSearch} className={styles["search-icon"]} />
    </div>
  );
};
