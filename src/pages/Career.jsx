import React from 'react';
import "../styles/contact.css";
import Header from './components/header';
import Menu from './components/menu';
import Footer from "./components/footer"
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import { Link } from 'react-router-dom';
import {Link as FileLink} from "@phosphor-icons/react";

const Career = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuDropdown = () => {
      setOpenMenu(true);
      document.body.classList.add('dropdownMenuOpened');
  }
  const closeMenuDropdown = () => {
    setOpenMenu(false);
    document.body.classList.remove('dropdownMenuOpened');
  }
  useEffect(() => {
    return () => {
      // This cleanup function will be called when the component unmounts
      closeMenuDropdown();
    };
  }, []);
  return (
    <div className=''>  
        <Header openMenuDropdown = {openMenuDropdown} companyLogo = {companyLogo}/>
        <Menu closeMenuDropdown ={closeMenuDropdown} /> 
        <div className="contact-hero">
          <div className="contact-hero-text">
            <span className='sub-header-text'>Join our team</span>
            <h1>Career page</h1>
          </div>
        </div>
       
        <Footer />
    </div>
  )
}

export default Career