import { requestOptions } from "../index";

export const oneLaunch = (id, options = requestOptions) =>
  fetch(`https://api.spacexdata.com/v4/launches${id}`, options);
