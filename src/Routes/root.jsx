import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import Footer from '../Components/footer';
import axios from 'axios';  
import Modal from '../Components/modal';
import LoginForm from '../Components/loginForm'; 
import SignUpForm from '../Components/SignUpForm';

const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function fetchLoginStatus() {
      try {
        const response = await axios.get('http://localhost:3000/auth/verify', { withCredentials: true });
        setLoggedIn(response.data.verified);
      } catch (error) {
        console.error('Error verifying login status:', error);
      }
    }

    fetchLoginStatus();
  }, []); 

  const openLoginModal = () => setIsLoginModalOpen(true); 
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true); 
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignUpSuccess = () => {
    setIsSignUpModalOpen(false);
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
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><button onClick={openSignUpModal} className="text-white">Sign Up</button></li>
            {loggedIn ? (
              <li><Link to="/logout">Logout</Link></li>
            ) : (
              <li><button onClick={openLoginModal} className="text-white">Login</button></li>
            )}
          </ul>
        </nav>

        <div className={`sub-menu-wrap ${isMenuOpen ? 'open' : ''}`}>
          <ul className="sub d-block d-xl-none">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link></li>
            <li><Link to="/authors" onClick={() => setIsMenuOpen(false)}>Authors</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><button onClick={openSignUpModal} style={{ color: '#2e69ac' }}>Sign Up</button></li>
            {loggedIn ? (
              <li><Link to="/logout" onClick={() => setIsMenuOpen(false)}>Logout</Link></li>
            ) : (
              <li><button onClick={openLoginModal} style={{ color: '#2e69ac' }}>Login</button></li>
            )}
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

      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
      
      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
      </Modal>
    </>
  );
};

export default Root;
