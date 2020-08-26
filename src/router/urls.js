import React from "react";
import { v4 as uuidv4 } from "uuid";
import Default from "../components/tables/default";
import CompanyInfoTable from "../components/tables/companyInfoTable";
import NextLaunchTable from "../components/tables/nextLaunchTable";

const HOME = "Home";
const COMPANY = "Company";
const NEXT_LAUNCH = "Next Launch";

export const routes = [
  {
    path: "/",
    exact: true,
    name: HOME,
    id: uuidv4(),
    title: () => <p className="title"></p>,
    sidebar: () => <div>{HOME}</div>,
    component: (props) => <Default props={props} />,
  },
  {
    path: "/company",
    name: COMPANY,
    id: uuidv4(),
    title: () => <p className="title">{COMPANY}</p>,
    sidebar: () => <div>{COMPANY}</div>,
    component: (props) => <CompanyInfoTable props={props} />,
  },
  {
    path: "/next-launch",
    name: NEXT_LAUNCH,
    id: uuidv4(),
    title: () => <p className="title">{NEXT_LAUNCH}</p>,
    sidebar: () => <div>{NEXT_LAUNCH}</div>,
    component: (props) => <NextLaunchTable props={props} />,
  },
];
