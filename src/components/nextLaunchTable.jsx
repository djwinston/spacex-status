import React from "react";

const NextLaunchTable = ({ data }) => {
  console.log(`TCL>>>: nextLaunch -> data`, data);
  return (
    <>
      <span>{data.details}</span>
    </>
  );
};

export default NextLaunchTable;
