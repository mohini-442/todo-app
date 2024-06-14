// App.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-60 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Todo App
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link to="/">Add Task</Link>
          </li>
          <li className="">
            <Link to="/alltasks">All Tasks</Link>
          </li>
          <li className="">
            <Link to="/completed">Completed Tasks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;


