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
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/latest-news">Latest News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
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
