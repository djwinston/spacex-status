import React from "react";
import { Link } from "react-router-dom";

import { HOME_URL, COMPANY_URL, NEXT_LAUNCH_URL, routes } from "../router/urls";

const Navbar = () => (
  <nav>
    {routes.map((route) => (
      <Link to={route.path}>{route.name}</Link>
    ))}
  </nav>
);

export default Navbar;
