import React from "react";
import { Route, Switch } from "react-router-dom";
import { HOME_URL, COMPANY_URL, NEXT_LAUNCH_URL, routes } from "./urls";

import Default from "../components/default";
import CompanyInfoTable from "../components/companyInfoTable";
import NextLaunchTable from "../components/nextLaunchTable";

const AppRouter = () => (
  <Switch>
    <Route exact path={HOME_URL} component={Default} />
    <Route exact path={COMPANY_URL} component={CompanyInfoTable} />
    <Route exact path={NEXT_LAUNCH_URL} component={NextLaunchTable} />
  </Switch>
);

export default AppRouter;
