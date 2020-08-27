import React from "react";
import { Link } from "react-router-dom";
import useRouter from "../hooks/useRouter";

import { routes } from "../router/urls";

const BreadCrumbs = () => {
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  //   console.log(router.query.postId);

  // Get current pathname
  //   console.log(router.pathname);
  const isActivePath = (path) => (path === router.pathname ? "is-active" : "");
  return (
    <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        {routes.map((route) => (
          <li key={route.id} className={isActivePath(route.path)}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
