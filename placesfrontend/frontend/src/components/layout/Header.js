import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          Places Frontend
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/partners" className="nav-link">
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/places" className="nav-link">
                  Places
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
