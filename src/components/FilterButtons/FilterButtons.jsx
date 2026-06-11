import styles from "./FilterButtons.module.css";

const FILTERS = ["All", "High", "Medium", "Low"];

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      <span className={styles.filterLabel}>Filter by Priority:</span>
      <div className={styles.filterButtons}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${currentFilter === f ? styles.active : ""}`}
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