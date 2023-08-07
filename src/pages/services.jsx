import React from 'react';
import "../styles/services.css";
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';
import { useState,useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";

const Services = () => {
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
        <div className="service-hero">
          <div className="service-hero-text">
            <span className="sub-header-text">We bring it to live</span>
            <h1>What we do.</h1>
          </div>
        </div>
        <div className="what-we-do-section">
          <div className="container">
            <div className="services-left">
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Web development</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Mobile Applications</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Data Science</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Machine Learning</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
            </div>
            <div className="services-right">
              <a href="#" className="service_container">
                  <div className="service_thumbnail">
                    <img src="" alt="" />
                  </div>
                  <div className="service_brief">
                    <b>Artificial Intelligence</b>
                    <span>We develop highly scalable websites and web applications</span>
                  </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Training & Internship</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Research Writing</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
              <a href="#" className="service_container">
                <div className="service_thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="service_brief">
                  <b>Internet of Things (IoT)</b>
                  <span>We develop highly scalable websites and web applications</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services