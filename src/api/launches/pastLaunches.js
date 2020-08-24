import { requestOptions } from "../index";

export const pastLaunches = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches/past", options);
