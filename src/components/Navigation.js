import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header>
      <div className="flex panel-bg-navigation">
        <h1>
          <Link to="/" className="logo">Bookstore CMS</Link>
        </h1>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/" className="my-link">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="my-link">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
