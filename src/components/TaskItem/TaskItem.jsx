import "./TaskItem.css";

const PRIORITY_COLORS = {
  High: "#ef4444",
  Medium: "#f59e0b",
  Low: "#22c55e",
};

const TaskItem = ({ task, onDelete, onToggleComplete, onToggleEdit, onUpdateName }) => {
  const borderColor = PRIORITY_COLORS[task.priority];

  return (
    <div className="task-item" style={{ borderLeftColor: borderColor }}>
      <div className="task-info">
        {task.isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={task.name}
            onChange={(e) => onUpdateName(task.id, e.target.value)}
            onBlur={() => onToggleEdit(task.id)}
            autoFocus
          />
        ) : (
          <span
            className={`task-name ${task.completed ? "completed" : ""}`}
            onClick={() => onToggleEdit(task.id)}
            title="Click to edit"
          >
            {task.name}
          </span>
        )}
        <span className="task-priority">{task.priority} Priority</span>
      </div>

      <div className="task-actions">
        {task.completed ? (
          <button
            className="undo-btn"
            onClick={() => onToggleComplete(task.id)}
          >
            Undo
          </button>
        ) : (
          <button
            className="done-btn"
            onClick={() => onToggleComplete(task.id)}
          >
            Done
          </button>
        )}
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
