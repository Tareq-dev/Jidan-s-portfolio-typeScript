import React from 'react';

const Navbar = () => {
     return (
          <div style={{backgroundColor: '#1c2a45'}} className="navbar h-18 sticky top-0 bg-transparent text-primary-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label  tabIndex={0}  className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul  className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-black rounded-box w-32">
              <li><a  href="/">Blog</a></li>
              <li><a  href="/">Gallery</a></li>
              <li><a  href="/">About</a></li>
      </ul>
            </div>
            <a href="/" className="btn btn-ghost normal-case text-xl">Enayet Jidan</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li><a  href="/">Blog</a></li>
              <li><a  href="/">Gallery</a></li>
              <li><a  href="/">About</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a  href="/" className="btn">Admin Login</a>
          </div>
        </div>
     );
};

export default Navbar;