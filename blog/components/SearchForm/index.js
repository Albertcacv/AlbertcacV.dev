import { useState } from "react";

import styles from "../../styles/searchForm.module.css";

export default function SearchForm() {
  let [isSearch, showSearch] = useState(false);

  const showForm = () => {
    if (isSearch) {
      showSearch(() => (isSearch = false));
    } else {
      showSearch(() => (isSearch = true));
    }
  };

  return (
    <div className={styles.search}>
      <button className={styles.search__button} onClick={showForm}>
        {/* <GoSearch /> */}
      </button>
      {isSearch && (
        <input
          type="text"
          placeholder="Search..."
          className={styles.search__input}
        />
      )}
    </div>
  );
}
