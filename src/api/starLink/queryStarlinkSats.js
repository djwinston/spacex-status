import { requestOptions } from "../index";

export const queryStarlinkSats = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/starlink/query", options);
