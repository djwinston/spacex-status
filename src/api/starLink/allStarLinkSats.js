import { requestOptions } from "./index";

export const allStarlinkSat = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/starlink", options);
