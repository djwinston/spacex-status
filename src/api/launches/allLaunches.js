import { requestOptions } from "./index";

export const allLaunches = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches", options);
