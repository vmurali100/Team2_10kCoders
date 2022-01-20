import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const Header = () => {
  const [navlinks, setNavlinks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/navlinks").then((res) => {
      console.log(res.data);
      setNavlinks(res.data)
    });
  }, []);
  return (
    <div>
      <header className="header">
        <nav
          className="navbar navbar-light navbar-expand-lg fixed-top"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <Link to="/">
                <img src="./img/logo.svg" alt="" width="45" />
              </Link>
            </a>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                {navlinks.map((nav) => (
                  <li className="nav-item">
                    <a className="nav-link text-uppercase active">
                      <Link to={`/${nav}`}>{nav}</Link>
                    </a>
                  </li>
                ))}
              </ul>
              {/* <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-uppercase active">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <Link to="/about">About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <Link to="/expertise">Expertise</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <Link to="/education">Education</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <Link to="/experience">Experience</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
