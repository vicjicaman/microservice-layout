import React from "react";
import { NavItem } from "reactstrap";

const Layout = ({ viewer, children, login, logout }) => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">
        µservices
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavItem>{viewer.id === null ? login : logout}</NavItem>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" className="container">
      {children}
    </main>
  </div>
);

export { Layout };
