import React from "react";
import { Link, Outlet } from "react-router-dom";

const Accessories = () => {
  return (
    <div className="container">
      <h1>Our Accessories</h1>
      <p>We have a variety of accessories to complement your equipment.</p>

      <nav>
        <ul>
          <li>
            <Link to="option1">Option 1</Link>
          </li>
          <li>
            <Link to="option2">Option 2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Accessories;
