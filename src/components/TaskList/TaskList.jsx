import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete, onToggleComplete, onToggleEdit, onUpdateName }) => {
  if (tasks.length === 0) {
    return <p className={styles.emptyMsg}>No tasks yet!</p>;
  }

  return (
    <div className={styles.taskList}>
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