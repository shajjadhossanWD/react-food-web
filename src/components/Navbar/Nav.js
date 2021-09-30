import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navStyle ={
        fontWeight: "bold",
        color: "rgb(212, 161, 31)"
      }
    return (
        <div className='navbars'>
             <h3>Food <span>Corner</span></h3> 
         <div>
             <NavLink to="/home" className="nav-item" activeStyle ={navStyle}>Home</NavLink>
             <NavLink to="/foods" className="nav-item" activeStyle ={navStyle}>Food-Items</NavLink>
             <NavLink to="/about" className="nav-item" activeStyle ={navStyle}>About Us</NavLink>
         </div>
             
        </div>
    );
};

export default Nav;