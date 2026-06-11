import TaskForm from "../../components/TaskForm/TaskForm";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import TaskList from "../../components/TaskList/TaskList";
import useTasks from "../../hooks/useTasks";
import styles from "./TodoPage.module.css";

const TodoPage = () => {
  const {
    tasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleComplete,
    toggleEdit,
    updateTaskName,
  } = useTasks();

  return (
    <div className={styles.todoPage}>
      <div className={styles.todoContainer}>
        <h1 className={styles.todoTitle}>To-Do List</h1>
        <hr className={styles.divider} />

        <TaskForm onAddTask={addTask} />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          onToggleEdit={toggleEdit}
          onUpdateName={updateTaskName}
        />
      </div>
    </div>
  );
};

export default TodoPage;