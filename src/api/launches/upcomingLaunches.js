import { requestOptions } from "./index";

export const upcomingLaunches = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/launches/upcoming", options);
