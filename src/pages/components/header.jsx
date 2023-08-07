import React from 'react';
import { Routes, NavLink, Link} from 'react-router-dom';
import {List} from "@phosphor-icons/react"


const Header = (props) => {
  
  return (
    <header>
        <div className="company_logo">
            <Link to="/">
            <img src={props.companyLogo} alt="Lantop infotech logo" />
            </Link>
        </div>
        <div className="cta_btn">
            <Link to="/contact" className="contactUsCta">
            <button>Contact us</button>
            </Link>                                                     
            <div className="menuOpener" onClick={props.openMenuDropdown}>
            <List size={32} weight='bold' />
            </div>
        </div>
    </header>
  )
}

export default Header