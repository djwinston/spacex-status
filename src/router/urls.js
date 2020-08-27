import React from "react";
import { v4 as uuidv4 } from "uuid";
import Default from "../components/tables/default";
import CompanyInfoTable from "../components/tables/companyInfoTable";
import NextLaunchTable from "../components/tables/nextLaunchTable";
import { dangerousMarkup } from "../helpers/utils";
import { HOME, COMPANY, NEXT_LAUNCH } from "../helpers/sidebar";

export const routes = [
  {
    path: "/",
    exact: true,
    name: HOME.name,
    id: uuidv4(),
    title: () => <p className="title"></p>,
    sidebar: () => dangerousMarkup(HOME.describe),
    component: (props) => <Default props={props} />,
  },
  {
    path: "/company",
    name: COMPANY.name,
    id: uuidv4(),
    title: () => <p className="title">{COMPANY.name}</p>,
    sidebar: () => dangerousMarkup(COMPANY.describe),
    component: (props) => <CompanyInfoTable props={props} />,
  },
  {
    path: "/next-launch",
    name: NEXT_LAUNCH.name,
    id: uuidv4(),
    title: () => <p className="title">{NEXT_LAUNCH.name}</p>,
    sidebar: () => dangerousMarkup(NEXT_LAUNCH.describe),
    component: (props) => <NextLaunchTable props={props} />,
  },
];
