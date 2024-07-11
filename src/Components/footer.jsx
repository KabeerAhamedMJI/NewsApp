import React from 'react';

function Footer(props) {
  return (
    <footer className=" foot text-white">
      <div className="container mx-auto  bg-tarnsparent-600">
       
        <div className="flex justify-center mb-1 ">
          <ul className="list-none">
            <li className="mb-2"><a href="/" className="text-white">Top News</a></li>
            <li className="mb-2"><a href="/about" className="text-white">Technology</a></li>
            <li className="mb-2"><a href="/articles" className="text-white">Life Styles</a></li>
            <li className="mb-2"><a href="/" className="text-white">Sports</a></li>
          </ul>
        </div>

     
        <div className="flex justify-center mb-2">
          <a href="#" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-2 bg-gray-800">
        <div className="container mx-auto text-white">
          &copy; 2024 NewsToday.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
