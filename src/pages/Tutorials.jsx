import React from 'react';
import '../styles/home.css';
import "../styles/tutorials.css"
import companyLogo from "/icons/lantoplogo2.svg";

import { Routes, NavLink, Link} from 'react-router-dom';
import { ArrowUpRight, List, X, YoutubeLogo } from '@phosphor-icons/react';

import { useState, useEffect } from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';

const Tutorials = () => {
  
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuDropdown = () => {
      setOpenMenu(true);
      document.body.classList.add('dropdownMenuOpened');
  }
  const closeMenuDropdown = () => {
    setOpenMenu(false);
    document.body.classList.remove('dropdownMenuOpened');

  }
  return (
    <div>
      <Header openMenuDropdown = {openMenuDropdown} companyLogo = {companyLogo}/>
      <Menu closeMenuDropdown ={closeMenuDropdown} /> 
      <div className="contact-hero">
          <div className="contact-hero-text">
            <span className='sub-header-text'>Tutorials curated by our team</span>
            <h1>Tutorials</h1>
          </div>
      </div>
      <div className="video-tutorials">
        <div className="container">
          <div className="video-tutorials-container">
              <iframe src="https://www.youtube.com/embed/drmLfg7kcQM?si=EInNP8NOGSYLt6uP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/GMgsKtH-ZcU?si=jYozOqmEryZbJV9G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/tQVN8aO5Gnk?si=9o3uQIbMdRiLdVLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/3pB6e0U83EE?si=6WCdoNgmdNSzzw7m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/h-cXiXGZ8hQ?si=sUu1GDwnw0fWkRDz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/hcHlTkk1F10?si=IxZZEhYLkQ_HnAwG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/BP0ilXXDNEE?si=NbUWF3kyOv3bnOen" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/JGspv3sq7Ek?si=LiO3T0xst7ESBFN7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/KKfbTkLt2zs?si=6gVbMtJT30h8U-wZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/OTtLoSlj24Q?si=1nQreiHyVpxu4ngv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/4uJDKU96o7Y?si=O9BlK-RjHPzac9pm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/vM4dIA7U3F8?si=XBAT70ABQCcWZmIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/3jD1voPCVwo?si=qyn8BQKVAHW09DRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/sAIYbCC5IJs?si=t0DO8JaEIIcpHt9T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/B7Cm3Aty8A4?si=HubgB9dOjg8fdakm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/B7Cm3Aty8A4?si=-taJkA_AlRAHi-W3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/q9yB2XMUvS0?si=CzydabcB8p93xq_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/SQ4R9qg1Q98?si=2bdsHE-u8CJXqDUJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="youtube-redirect">
            <a href="https://www.youtube.com/@lantop7801" target="_blank" rel="noopener noreferrer">
              <YoutubeLogo size={40} /> Subscribe for more <ArrowUpRight size={40} />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tutorials