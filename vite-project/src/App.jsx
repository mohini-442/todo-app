import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";
import CompletedTask from "./components/CompletedTask";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);

    const storedCompletedTask =
      JSON.parse(localStorage.getItem("completedTask")) || [];
    setCompletedTask(storedCompletedTask);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = (task) => {
    const updatedCompletedTask = [...completedTask, task];
    setCompletedTask(updatedCompletedTask);
    localStorage.setItem("completedTask", JSON.stringify(updatedCompletedTask));

    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <div id="root" className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<AddTask addTask={addTask} />} />
              <Route
                path="/completed"
                element={<CompletedTask tasks={completedTask} />}
              />
              <Route
                path="/alltasks"
                element={<AllTasks tasks={tasks} onComplete={completeTask} />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
