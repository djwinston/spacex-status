import React from "react";
import NavBar from "../components/navBar";
import AppRouter from "../router/index";
import { SideBarRouter, TitleRouter } from "../router/index";
import BreadCrumbs from "../components/breadCrumbs";

const App = () => {
  return (
    <>
      <div className="pageloader is-bottom-to-top">
        <span className="title">Loading...</span>
      </div>
      <div className="dashboard is-full-height">
        <div className="dashboard-panel is-one-quarter">
          <NavBar />
        </div>
        {/* is-scrollable */}
        <div className="dashboard-main">
          <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
              <span className="navbar-item">
                <BreadCrumbs />
              </span>
            </div>
          </nav>
          <section className="section">
            <TitleRouter />
            <AppRouter />
          </section>
          {/* <footer className="footer">footer</footer> */}
        </div>
        <div className="dashboard-panel is-small">
          <SideBarRouter />
        </div>
      </div>
    </>
  );
};

export default App;
