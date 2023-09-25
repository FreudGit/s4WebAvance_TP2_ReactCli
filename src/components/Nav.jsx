import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Web Avancé - TP2 (React)
        </a>
        <ul className="navbar-nav flex-row">
          {" "}
          <li className="nav-item">
            {/* <a className="nav-link" href="/">Home</a> */}
            <Link to="/" className="nav-link">
              Bienvenue
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/produits" className="nav-link">
              Produits(JSON Local)
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
