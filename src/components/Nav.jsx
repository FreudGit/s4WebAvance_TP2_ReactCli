import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Mon Site</a>
        <ul className="navbar-nav flex-row"> {/* Ajoutez la classe flex-row ici */}
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/produit">Produit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
