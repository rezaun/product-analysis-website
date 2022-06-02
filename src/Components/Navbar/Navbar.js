import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
       <nav>
           <div className="logo">
               <img src={Logo} alt="" />
           </div>
           <div className="menu">
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : "link")} to='/'>Home</NavLink>
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : 'link')} to='/about'>About</NavLink>
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : 'link')} to='/charts'>Chart</NavLink>
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : 'link')} to='/reviews'>Reviews</NavLink>
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : 'link')} to='/blogs'>Blog</NavLink>
               <NavLink className={({ isActive }) => (isActive ? "active-menu" : 'link')} to='/contact'>Contact</NavLink>
           </div>
       </nav>
    );
};

export default Navbar;