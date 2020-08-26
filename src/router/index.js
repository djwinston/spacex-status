import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./urls";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={!!route.exact}
          path={route.path}
          component={route.component}
          key={route.id}
        ></Route>
      ))}
    </Switch>
  );
};

export const SideBarRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={!!route.exact}
          path={route.path}
          component={route.sidebar}
          key={route.id}
        ></Route>
      ))}
    </Switch>
  );
};

export const TitleRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={!!route.exact}
          path={route.path}
          component={route.title}
          key={route.id}
        ></Route>
      ))}
    </Switch>
  );
};

export default AppRouter;
