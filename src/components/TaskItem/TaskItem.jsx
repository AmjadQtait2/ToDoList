import styles from "./TaskItem.module.css";

const PRIORITY_COLORS = {
  High: "red",
  Medium: "yellow",
  Low: "green",
};

const TaskItem = ({ task, onDelete, onToggleComplete, onToggleEdit, onUpdateName }) => {
  const borderColor = PRIORITY_COLORS[task.priority];

  return (
    <div className={styles.taskItem} style={{ borderLeftColor: borderColor }}>
      <div className={styles.taskInfo}>
        {task.isEditing ? (
          <input
            className={styles.editInput}
            type="text"
            value={task.name}
            onChange={(e) => onUpdateName(task.id, e.target.value)}
            onBlur={() => onToggleEdit(task.id)}
            autoFocus
          />
        ) : (
          <span
            className={`${styles.taskName} ${task.completed ? styles.completed : ""}`}
            onClick={() => onToggleEdit(task.id)}
            title="Click to edit"
          >
            {task.name}
          </span>
        )}
        <span className={styles.taskPriority}>{task.priority} Priority</span>
      </div>

      
      <div className={styles.taskActions}>
        {task.completed ? (
          <button className={styles.undoBtn} onClick={() => onToggleComplete(task.id)}>
            Undo
          </button>
        ) : (
          <button className={styles.doneBtn} onClick={() => onToggleComplete(task.id)}>
            Done
          </button>
        )}
        <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;