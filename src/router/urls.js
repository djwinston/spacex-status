import React from "react";
import Default from "../components/default";
import CompanyInfoTable from "../components/companyInfoTable";
import NextLaunchTable from "../components/nextLaunchTable";

export const HOME_URL = "/";
export const COMPANY_URL = "/company";
export const NEXT_LAUNCH_URL = "/next-launch";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",

    // sidebar: () => <div>home!</div>,
    component: () => <Default />,
  },
  {
    path: "/company",
    name: "Company",
    // sidebar: () => <div>bubblegum!</div>,
    component: (data) => <CompanyInfoTable data={data} />,
  },
  {
    path: "/next-launch",
    name: "Next Launch",
    // sidebar: () => <div>shoelaces!</div>,
    component: (data) => <NextLaunchTable data={data} />,
  },
];
