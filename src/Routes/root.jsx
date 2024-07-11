import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/footer';

const Root = () => {
  return (
    <>
      <header className="Header">
        <img className="img-fluid float-left" src="/Img/logo.png" alt="" />
        <nav className="d-none d-xl-block d-xxl-block">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/">Trendings</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
        <span className="material-symbols-outlined d-block d-xl-none">menu</span>
        <div id="SearchBar">
          <input type="text" placeholder="Search" />
          <span className="material-symbols-outlined">search</span>
        </div>
      </header>

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
