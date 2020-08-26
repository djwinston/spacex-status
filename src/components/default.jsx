import React from "react";

const Default = ({ data }) => {
  console.log(`TCL>>>: nextLaunch -> data`, data);
  return (
    <>
      <table className="table is-striped is-hoverable">default</table>
    </>
  );
};

export default Default;
