import React from "react";
import { NavItem, NavLink } from "reactstrap";

const Layout = ({ viewer, children, left = [], right = [] }) => (
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
          {[
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>,
            ...left
          ]}
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          {[
            ...right,
            <NavItem>
              <NavLink href="/auth">
                {viewer.username || "Login"}
              </NavLink>
            </NavItem>
          ]}
        </ul>
      </div>
    </nav>

    <main role="main" className="container">
      {children}
    </main>
  </div>
);

export { Layout };
