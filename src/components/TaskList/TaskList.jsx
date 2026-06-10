import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete, onToggleComplete, onToggleEdit, onUpdateName }) => {
  if (tasks.length === 0) {
    return <p className={styles["empty-msg"]}>No tasks yet!</p>;
  }

  return (
    <div className={styles["task-list"]}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
          onUpdateName={onUpdateName}
        />
      ))}
    </div>
  );
};

export default TaskList;
