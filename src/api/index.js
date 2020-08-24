const myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "__cfduid=d6a26170f38b3d5abeff1f6eb36e0fd651598111719"
);

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "manual",
};
