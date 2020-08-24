import { requestOptions } from "./index";

export const companyInfo = (options = requestOptions) =>
  fetch("https://api.spacexdata.com/v4/company", options);
