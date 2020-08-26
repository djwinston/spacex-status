import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../router/urls";

const Navbar = () => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li key={route.id}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
