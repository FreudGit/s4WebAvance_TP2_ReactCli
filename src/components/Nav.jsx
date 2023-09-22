import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Web Avancé - TP2</a>
        <ul className="navbar-nav flex-row"> {/* Ajoutez la classe flex-row ici */}
          <li className="nav-item">
            {/* <a className="nav-link" href="/">Home</a> */}
            <Link to="/" className="nav-link">Home</Link>

          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/produits">Produits</a> */}
            <Link to="/produits" className="nav-link">Produits</Link>

          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">À propos</a> */}
            <Link to="/about" className="nav-link">À propos</Link>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
