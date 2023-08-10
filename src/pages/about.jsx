import React from 'react';
import "../styles/contact.css";
import Header from './components/header';
import Menu from './components/menu';
import Footer from "./components/footer"
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import { Link } from 'react-router-dom';
import {Link as FileLink} from "@phosphor-icons/react";

const About = () => {
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
    <div>
        <Header openMenuDropdown = {openMenuDropdown} companyLogo = {companyLogo}/>
        <Menu closeMenuDropdown ={closeMenuDropdown} /> 
        <div className="contact-hero">
          <div className="contact-hero-text">
            <span className='sub-header-text'>About us</span>
            <h1>Get to know us</h1>
          </div>
        </div>
        <div className="mission-section">
          <div className="container">
            <h2 className="header-text">Our Mission</h2>
            <p className="sub-header-text">
            As part of the objectives for human capital and national development, 
            software trainings are carried out in areas of web developments, 
            software development training, data science, artificial intelligence & robotics and 
            computer proficiency with opening for an arter-training mentorship and internships.
            <br/>
            <br />
            Our Mission is to stand out in building a friendly, mutual beneficial and customer-centric 
            professional and innovative workforce that painstakenly provides solutions to all kinds 
            of Technology problems and bolsters human capital development.
            </p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About