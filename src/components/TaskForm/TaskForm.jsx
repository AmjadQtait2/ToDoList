import { useForm } from "react-hook-form";
import styles from "./TaskForm.module.css";

const TaskForm = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    onAddTask(data.taskName, data.priority);
    reset();
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            id="taskName"
            type="text"
            placeholder="Enter task"
            {...register("taskName", {
              required: "Task name is required",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "English characters only",
              },
            })}
          />
          {errors.taskName && (
            <span className={styles.errorMsg}>{errors.taskName.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            {...register("priority", { required: "Priority is required" })}
          >
            <option value="">-- Select --</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && (
            <span className={styles.errorMsg}>{errors.priority.message}</span>
          )}
        </div>

        <button type="submit" className={styles.addBtn} disabled={!isValid}>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;