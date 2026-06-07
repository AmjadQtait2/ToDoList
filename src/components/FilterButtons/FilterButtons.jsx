import "./FilterButtons.css";

const FILTERS = ["All", "High", "Medium", "Low"];

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <span className="filter-label">Filter by Priority:</span>
      <div className="filter-buttons">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${currentFilter === f ? "active" : ""}`}
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
