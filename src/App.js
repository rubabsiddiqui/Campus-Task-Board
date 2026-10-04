import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Assignment",
      category: "Study"
    },
    {
      id: 2,
      title: "Go for Exercise",
      category: "Health"
    },
    {
      id: 3,
      title: "Buy Groceries",
      category: "Shopping"
    }
  ]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      category: "General"
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <div>
      <h1>My Tasks</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;