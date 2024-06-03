import styles from "./TopNav.module.css";

import { SearchIcon } from "@/ui/icons/SearchIcon";
import { TodayDatetime } from "@/ui/time/TodayDatetime";

function TopNav() {
  return (
    <div className={styles.topNavigation}>
      <div className={styles.topNavLeft}>
        <button
          type="button"
          aria-label="Search"
          className={styles.searchButton}
        >
          <SearchIcon />
        </button>
        <TodayDatetime />
      </div>
      <div className={styles.topNavRight}>
        <button type="button" className={styles.button}>
          Subscribe
        </button>
        <button type="button" className={styles.button}>
          Log In
        </button>
      </div>
    </div>
  );
}

export { TopNav };
