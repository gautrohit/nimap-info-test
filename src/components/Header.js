import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <img
              src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/IHXoEES.png"
              alt=""
              width="50"
              height="50"
            />
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item ">
                <Link to="/" class="nav-link active a-tab" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/task" class="nav-link a-tab">
                  Task
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/user" class="nav-link a-tab">
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
