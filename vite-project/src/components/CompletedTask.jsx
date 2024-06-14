// CompletedTask.js
import React from "react";

const CompletedTask = ({ tasks }) => (
  <div className="max-w-xl pt-12 mx-auto">
    <h2 className="text-xl font-bold mb-4">Completed Tasks</h2>
    {tasks.length === 0 ? (
      <p>No completed tasks yet.</p>
    ) : (
      tasks.map((task, index) => (
        <div key={index} className="border border-gray-400 p-4 rounded mb-4">
          <h3 className="text-lg font-bold mb-2">{task.title}</h3>
          <p>{task.description}</p>
          <p>Start Time: {new Date(task.startTime).toLocaleString()}</p>
          <p>End Time: {new Date(task.endTime).toLocaleString()}</p>
        </div>
      ))
    )}
  </div>
);

export default CompletedTask;
