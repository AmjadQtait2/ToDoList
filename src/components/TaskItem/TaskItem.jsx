import styles from "./TaskItem.module.css";

const PRIORITY_COLORS = {
  High: "red",
  Medium: "Yellow",
  Low: "green",
};

const TaskItem = ({ task, onDelete, onToggleComplete, onToggleEdit, onUpdateName }) => {
  const borderColor = PRIORITY_COLORS[task.priority];

  return (
    <div className={styles["task-item"]} style={{ borderLeftColor: borderColor }}>
      <div className={styles["task-info"]}>
        {task.isEditing ? (
          <input
            className={styles["edit-input"]}
            type="text"
            value={task.name}
            onChange={(e) => onUpdateName(task.id, e.target.value)}
            onBlur={() => onToggleEdit(task.id)}
            autoFocus
          />
        ) : (
          <span
            className={`${styles["task-name"]} ${task.completed ? styles["completed"] : ""}`}
            onClick={() => onToggleEdit(task.id)}
            title="Click to edit"
          >
            {task.name}
          </span>
        )}
        <span className={styles["task-priority"]}>{task.priority} Priority</span>
      </div>

      <div className={styles["task-actions"]}>
        {task.completed ? (
          <button className={styles["undo-btn"]} onClick={() => onToggleComplete(task.id)}>
            Undo
          </button>
        ) : (
          <button className={styles["done-btn"]} onClick={() => onToggleComplete(task.id)}>
            Done
          </button>
        )}
        <button className={styles["delete-btn"]} onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
