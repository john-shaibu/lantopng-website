import React from 'react';
import "../styles/contact.css";
import Header from './components/header';
import Menu from './components/menu';
import Footer from "./components/footer"
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import { Link } from 'react-router-dom';
import {Link as FileLink} from "@phosphor-icons/react";

const Contact = () => {
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
            <span className='sub-header-text'>We love to hear from you</span>
            <h1>Talk to us...</h1>
          </div>
        </div>
        <div className="contact-form">
          <div className="container">
            <div className="form">
              <form action="#" method="post">
                <div className='user-interest'>
                  <span>What are you interested in?</span>
                  <div className="options">
                      <input type="radio" name="user-interest" id="web-design"  value="Web developement" />
                      <input type="radio" name="user-interest" id="Mobile"  value="Mobile Application" />
                      <input type="radio" name="user-interest" id="Research"  value="Research Writing" />
                      <input type="radio" name="user-interest" id="Machine"  value="Machine Learning" />
                      <input type="radio" name="user-interest" id="Data"  value="Data Analysis" />
                      <input type="radio" name="user-interest" id="Artificial"  value="Artificial Intelligence" />
                      <input type="radio" name="user-interest" id="Internship"  value="Internship/Training" />
                    <label htmlFor="web-design" className='web-design'>
                      Web Development
                    </label>
                    <label htmlFor="Mobile" className='Mobile'>
                      Mobile Application
                    </label>
                    <label htmlFor="Research" className='Research'>
                      Research Writing
                    </label>
                    <label htmlFor="Machine" className='Machine'>
                      Machine Learning
                    </label>
                    <label htmlFor="Data" className='Data'>
                      Data analysis
                    </label>
                    <label htmlFor="Artificial" className='Artificial'>
                      Artificial Intelligence
                    </label>
                    <label htmlFor="Internship" className='Internship'>
                      Internship/Training
                    </label>
                  </div>
                </div>
                <div className="fullname">
                  <input type="text" name="fullname" id="fullname"  placeholder='Fullname: John Doe'/>
                </div>
                <div className="email">
                  <input type="email" name="email" id="email"  placeholder='Email: youremail@example.com'/>
                </div>
                <div className="budget">
                  <span>What's your budget?</span>
                  <div className="options">
                      <input type="radio" name="budget" id="fifty-thousand"  value="50,000" />
                      <input type="radio" name="budget" id="hundred-thousand"  value="100,000" />
                      <input type="radio" name="budget" id="two-fifty-thousand"  value="250,000" />
                      <input type="radio" name="budget" id="five-hundred-thousand"  value="500,000" />
                      <input type="radio" name="budget" id="one-million"  value="1,000,000" />
                      <input type="radio" name="budget" id="five-million"  value="5,000,000" />
                      <input type="radio" name="budget" id="ten-million"  value="10,000,000" />
                    <label htmlFor="fifty-thousand" className='fifty-thousand'>
                      50,000
                    </label>
                    <label htmlFor="hundred-thousand" className='hundred-thousand'>
                      100,000
                    </label>
                    <label htmlFor="two-fifty-thousand" className='two-fifty-thousand'>
                      250,000
                    </label>
                    <label htmlFor="five-hundred-thousand" className='five-hundred-thousand'>
                      500,000
                    </label>
                    <label htmlFor="one-million" className='one-million'>
                      1,000,000
                    </label>
                    <label htmlFor="five-million" className='five-million'>
                      5,000,000
                    </label>
                    <label htmlFor="ten-million" className='ten-million'>
                      10,000,000
                    </label>
                  </div>
                </div>
                <div className="additional-information">
                  <textarea name="informatione" id="information" placeholder='Additional-information'></textarea>
                </div>
                <div className="attachment">
                  
                  <FileLink size={40} />
                  <span>Attach a file</span> 
                  <input type="file" name="attachment" id="" />
                  
                </div>
                  <button type="submit">Send email</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact