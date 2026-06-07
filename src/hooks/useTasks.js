import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (taskName, priority) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority,
      completed: false,
      isEditing: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const updateTaskName = (id, newName) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === filter);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleComplete,
    toggleEdit,
    updateTaskName,
  };
};

export default useTasks;
