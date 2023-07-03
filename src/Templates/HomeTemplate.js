import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CardModal from "../Pages/ShoesStore/CardModal";

export default class HomeTemplate extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  active-class-name="active"
                  className="nav-link"
                  to="/lifecycle"
                >
                  Life CyCle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  active-class-name="active"
                  className="nav-link"
                  to="/demoredux"
                >
                  Demo Redux
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  active-class-name="active"
                  className="nav-link"
                  to="/shoesshop"
                >
                  Shoes Store
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button
                type="button"
                className="btn btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </form>
          </div>
        </nav>
        <Outlet />
        <CardModal />
        <footer className="bg-dark text-white">Footer</footer>
      </>
    );
  }
}
