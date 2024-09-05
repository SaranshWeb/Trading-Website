import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary border-bottom">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img src="\images\tradeClick logo.png" style={{width:270}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
