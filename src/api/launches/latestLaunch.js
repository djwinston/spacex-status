import { requestOptions } from "./index";

export const latestLaunch = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches/latest", options);
