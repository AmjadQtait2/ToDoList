import styles from "./FilterButtons.module.css";

const FILTERS = ["All", "High", "Medium", "Low"];

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles["filter-container"]}>
      <span className={styles["filter-label"]}>Filter by Priority:</span>
      <div className={styles["filter-buttons"]}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles["filter-btn"]} ${currentFilter === f ? styles["active"] : ""}`}
            onClick={() => onFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
