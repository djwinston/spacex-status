import React, { useState, useEffect } from "react";
import { companyInfo } from "../api/companyInfo";
import { nextLaunch } from "../api/launches";
import CompanyInfoTable from "../components/companyInfoTable";
import NextLaunchTable from "../components/nextLaunchTable";
import NavBar from "../components/navBar";

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

  const loading = () =>
    !companyData.links && !companyData.headquarters ? "is-active" : "";
  return (
    <>
      <div className={`pageloader is-bottom-to-top ${loading()}`}>
        <span className="title">Loading...</span>
      </div>
      <div class="dashboard is-full-height">
        <div class="dashboard-panel is-one-quarter">
          <NavBar />
        </div>

        <div class="dashboard-main is-scrollable">
          <nav class="navbar is-fixed-top">
            <div class="navbar-brand">
              <span class="navbar-item">Bulma Dashbaord</span>
            </div>
          </nav>

          <section class="section">
            <p class="title">Main</p>
            <p>main content</p>
          </section>

          <footer class="footer">footer</footer>
        </div>

        <div class="dashboard-panel is-small">right panel</div>
      </div>
      <div className="App container">
        <header>
          <CompanyInfoTable data={companyData} />
        </header>
      </div>
      <NextLaunchTable data={nextLaunchData} />
    </>
  );
};

export default App;
