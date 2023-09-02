import React from 'react'
import { X } from '@phosphor-icons/react';
import { NavLink, Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className="menu">
        <div className="container">
        <div className="closeMenuBar" onClick={props.closeMenuDropdown}>
            <X size={40} weight='bold'/>
        </div>
        <div className="innerContainer">
            <div className="links">
            <span>Links</span>
            <ul>
                <li>
                <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink to='/company'>Get to know us</NavLink>
                </li>
                <li>
                <NavLink to='/services'>What we offer</NavLink>
                </li>
                <li>
                <NavLink to='/tutorials'>Tutorials</NavLink>
                </li>
                <li>
                <NavLink to='/blog'>Our blogs</NavLink>
                </li>
                <li>
                <NavLink to='/contact'>Contact us</NavLink>
                </li>
            </ul>
            </div>
        </div>
        <div className="innerContainer">
            <div className="socials">
            <span>Socials</span>
            <ul>
                <li>
                <Link to="https://www.twitter.com/johnnShaibu">Twitter</Link>
                </li>
                <li>
                <Link to="">Instagram</Link>
                </li>
                <li>
                <Link to="https://www.github.com/john-shaibu">Github</Link>
                </li>
                <li>
                <Link to="">Thread</Link>
                </li>
                <li>
                <Link to="">LinkedIn</Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>   
  )
}

export default Menu