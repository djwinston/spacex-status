import React, { useState, useEffect } from "react";
import { companyInfo } from "../api/companyInfo";
import { nextLaunch } from "../api/launches";
import NextLaunchTable from "../components/nextLaunchTable";

const App = () => {
  const [companyData, setCompanyData] = useState({});
  const [nextLaunchData, setNextLaunchData] = useState({});

  useEffect(() => {
    companyInfo()
      .then((res) => res.json())
      .then((data) => setCompanyData(data))
      .catch((error) => console.log(error));
    nextLaunch()
      .then((res) => res.json())
      .then((data) => setNextLaunchData(data))
      .catch((error) => error);
  }, []);

  console.log(`TCL>>>: App -> companyData>>>>`, companyData.links);
  // console.log(`TCL>>>: App -> nextLaunchData`, nextLaunchData);
  const loading = () =>
    !companyData.links && !companyData.headquarters ? "is-active" : "";
  return (
    <>
      <div className={`pageloader is-bottom-to-top ${loading()}`}>
        <span className="title">Loading...</span>
      </div>
      <div className="App container">
        <header>
          <table className="table is-striped is-hoverable">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{companyData.name}</td>
              </tr>
              <tr>
                <th>Founder</th>
                <td>{companyData.founder}</td>
              </tr>
              <tr>
                <th>Founded</th>
                <td>{companyData.founded}</td>
              </tr>
              <tr>
                <th>Employees</th>
                <td>{companyData.employees}+</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  {companyData.headquarters
                    ? companyData.headquarters.address
                    : ""}
                </td>
              </tr>
              <tr>
                <th>City</th>
                <td>
                  {companyData.headquarters
                    ? companyData.headquarters.city
                    : ""}
                </td>
              </tr>
              <tr>
                <th>State</th>
                <td>
                  {companyData.headquarters
                    ? companyData.headquarters.state
                    : ""}
                </td>
              </tr>
              <tr className="is-selected">
                <th>Summary</th>
                <td>{companyData.summary}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Elon Twitter</th>
                <td>
                  <a
                    href={
                      companyData.links ? companyData.links.elon_twitter : ""
                    }
                  >
                    {companyData.links ? companyData.links.elon_twitter : ""}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Flickr</th>
                <td>
                  <a href={companyData.links ? companyData.links.flickr : ""}>
                    {companyData.links ? companyData.links.flickr : ""}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Twitter</th>
                <td>
                  <a href={companyData.links ? companyData.links.twitter : ""}>
                    {companyData.links ? companyData.links.twitter : ""}
                  </a>
                </td>
              </tr>
              <tr>
                <th>WebSite</th>
                <td>
                  <a href={companyData.links ? companyData.links.website : ""}>
                    {companyData.links ? companyData.links.website : ""}
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </header>
      </div>
      <NextLaunchTable data={nextLaunchData} />
    </>
  );
};

export default App;
