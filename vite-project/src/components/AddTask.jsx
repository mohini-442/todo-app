// AddTask.js
import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, startTime, endTime });
    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="max-w-xl py-24 mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Start Time</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>End Time</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
