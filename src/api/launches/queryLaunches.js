import { requestOptions } from "../index";

export const queryLaunches = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches/query", options);
