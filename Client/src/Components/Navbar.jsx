import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Navbar() {
  function logout() {
    localStorage.clear();
    window.location.reload(false);
  }
  return (
    <>
      <nav className="navbar-dark bg-dark d-flex flex-wrap align-item-center juctify-content-lg-start shadow">
        <a href="/" className="navbar-brand col-md-3 col-ld-2 me-0 px-3">
          KariyerNet Case
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-white">
          <li>
            <NavLink
              exact
              to="/company"
              className="nav-link px-2 link-secondary"
            >
              Company
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/jobs" className="nav-link px-2 link-secondary">
              Job
            </NavLink>
          </li>
        </ul>
        <div class="text-end">
          <button
            type="button"
            className="btn btn-sm btn-outline-light me-2 rounded-0 "
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
