import { requestOptions } from "../index";

export const nextLaunch = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches/next", options);
