import React, { useState } from 'react'; 
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/footer'; 

const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="Header">
        <img className="img-fluid float-left" src="/Img/logo.png" alt="Logo" />

        <nav className="d-none d-xl-block d-xxl-block">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/">Trendings</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Sign Up</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </nav>

        <div className={`sub-menu-wrap ${isMenuOpen ? 'open' : ''}`}>
          <ul className="sub d-block d-xl-none">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Trendings</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
          </ul>
        </div>


        <span className="material-symbols-outlined d-block d-xl-none" onClick={toggleMenu}>menu</span>

 
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
