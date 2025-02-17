import React from "react";
import { Link, Outlet } from "react-router-dom";

const Equipments = () => {
  return (
    <div className="container">
      <h1>Our Equipments</h1>
      <p>Select from our wide range of industrial equipment.</p>

      <nav>
        {/* Submenu links for Option 1 and Option 2 */}
        <ul>
          <li>
            <Link to="option1">Option 1</Link>
          </li>
          <li>
            <Link to="option2">Option 2</Link>
          </li>
        </ul>
      </nav>
      {/* This renders the nested submenu content */}
      <Outlet />
    </div>
  );
};

export default Equipments;
