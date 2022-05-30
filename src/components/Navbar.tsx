import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
const Navbar = () => {
     return (
          <div style={{backgroundColor: '#1c2a45'}} className="navbar h-20 sticky top-0 bg-transparent text-primary-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label  tabIndex={0}  className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul  className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-black rounded-box w-32">
              <li><Link  to="/blogs">Blog</Link></li>
              <li><Link  to="/">Gallery</Link></li>
              <li><Link  to="/">About</Link></li>
      </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li><Link  to="/blogs">Blog</Link></li>
              <li><Link  to="/">Gallery</Link></li>
              <li><Link  to="/">About</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link  to="/" className="btn">Admin Login</Link>
          </div>
        </div>
     );
};

export default Navbar;