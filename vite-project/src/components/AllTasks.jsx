// AllTasks.js
import React from "react";

const Task = ({ task, onComplete }) => {
  const { title, description, startTime, endTime } = task;

  return (
    <div className="border border-gray-400 p-4 rounded mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <p>Start Time: {new Date(startTime).toLocaleString()}</p>
      <p>End Time: {new Date(endTime).toLocaleString()}</p>
      <button
        onClick={() => onComplete(task)}
        className="mt-2 bg-green-500 text-white py-1 px-2 rounded"
      >
        Complete Task
      </button>
    </div>
  );
};

const AllTasks = ({ tasks, onComplete }) => (
  <div className="max-w-xl pt-12 mx-auto">
    <h2 className="text-xl font-bold mb-4">All Tasks</h2>
    {tasks.map((task, index) => (
      <Task key={index} task={task} onComplete={onComplete} />
    ))}
  </div>
);

export default AllTasks;
