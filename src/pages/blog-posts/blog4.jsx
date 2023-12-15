import React from 'react';
import '../../styles/blog.css';
import Header from '../components/header';
import Menu from '../components/menu';
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import {CalendarBlank, ClockCountdown} from "@phosphor-icons/react"
import johnbaba from "/images/johnbaba.jpg";
import Footer from '../components/footer';


const Blog4 = () => {
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

        <div className="blog-read">
            <div className="container">
                <div className="blog-header">
                    <div className="blog-information">
                        <div className="date-posted">
                            <CalendarBlank size={30} />
                            <span>09-June-2023</span>    
                        </div>
                        <div className="est-read-time">
                            <ClockCountdown size={30} />
                            <span>10 minutes read </span>
                        </div>
                    </div>
                    <h1>
                        The Growing Importance of Data Integration in Modern Businesses.
                    </h1>
                    <div className="blog-read-details">
                        <div className="writer-details">
                            <div className="writer-thumbnail">
                                <img src={johnbaba} alt="john shaibu profile picture" />
                            </div>
                            <div className='writer-bio'>
                                <b>John Shaibu</b>
                                <span>Software engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="blog-content">
                    
                </div>
            </div>
           
        </div>
        <Footer />

    </div>
  )
}

export default Blog4