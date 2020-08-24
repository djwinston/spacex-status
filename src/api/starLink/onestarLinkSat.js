import { requestOptions } from "../index";

export const onestarLinkSat = (id, options = requestOptions) =>
  fetch(`https://api.spacexdata.com/v4/starlink/${id}`, options);
