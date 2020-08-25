import React from "react";

const CompanyInfoTable = ({ data }) => {
  return (
    <>
      <table className="table is-striped is-hoverable">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Founder</th>
            <td>{data.founder}</td>
          </tr>
          <tr>
            <th>Founded</th>
            <td>{data.founded}</td>
          </tr>
          <tr>
            <th>Employees</th>
            <td>{data.employees}+</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{data.headquarters ? data.headquarters.address : ""}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{data.headquarters ? data.headquarters.city : ""}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{data.headquarters ? data.headquarters.state : ""}</td>
          </tr>
          <tr className="is-selected">
            <th>Summary</th>
            <td>{data.summary}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Elon Twitter</th>
            <td>
              <a href={data.links ? data.links.elon_twitter : ""}>
                {data.links ? data.links.elon_twitter : ""}
              </a>
            </td>
          </tr>
          <tr>
            <th>Flickr</th>
            <td>
              <a href={data.links ? data.links.flickr : ""}>
                {data.links ? data.links.flickr : ""}
              </a>
            </td>
          </tr>
          <tr>
            <th>Twitter</th>
            <td>
              <a href={data.links ? data.links.twitter : ""}>
                {data.links ? data.links.twitter : ""}
              </a>
            </td>
          </tr>
          <tr>
            <th>WebSite</th>
            <td>
              <a href={data.links ? data.links.website : ""}>
                {data.links ? data.links.website : ""}
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      ;
    </>
  );
};

export default CompanyInfoTable;
