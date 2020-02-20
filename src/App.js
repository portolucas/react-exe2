import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">List</Link>
        </li>
        <li>
          <Link to="/users:id">User Name</Link>
        </li>
      </ul>

      <ApplicationRoutes />
    </div>
  );
}
