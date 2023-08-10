import React from 'react';
import '../styles/home.css';
import heroimage from "/images/hero image.jpg"
import banner from "/images/banner.png"

import research from "/illustrations/research.svg"
import secure from "/illustrations/secure.svg"
import leader from "/illustrations/leader.svg"

import companyLogo from "/icons/LANTOP LOGO.svg";

import johnbaba from "/images/johnbaba.jpg";

import blog_thumbnail from "/images/eagle_logo.png";
import blog_thumbnail2 from "/images/ai.jpg";
import blog_thumbnail3 from "/images/robot.jpg";
import blog_thumbnail4 from "/images/hero image.jpg";


import { Routes, NavLink, Link} from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

import { useState, useEffect } from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';

const Home = () => {

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
    <div className='site'>
        <div className="hero">
            <Menu closeMenuDropdown ={closeMenuDropdown} />      
            <div className="heroInner">
              <Header openMenuDropdown = {openMenuDropdown} companyLogo = {companyLogo}/>
              <div className="right">
                <img src={heroimage} alt="Picture of a man using a Vr or virtual reality" />
              </div>
              <div className="left">
                <div className="heroText">
                  <span>
                    Web • Research  • Training
                  </span>
                  <h1>
                    We are a <br />
                    <span className='gradient-text'>Tech Solution</span><br />
                    Provider
                  </h1>
                  <p>
                    Unique tech company that owns top-notch services
                    for both individual and National Development.
                  </p>
                </div>
              </div>
              
            </div>
        </div>
        <div className="insights">
          <div className="container">
            <div>
              <b className='gradient-text'>100+</b>
              <span>Students Trained</span>
            </div>
            <div>
              <b className='gradient-text'>200+</b>
              <span>Projects completed</span>
            </div>
            <div>
              <b className="gradient-text">40+</b>
              <span>Team members</span>
            </div>
            <div>
              <b className='gradient-text'>10+</b>
              <span>Years of experience</span>
            </div>
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
            <Link to='/company' className="explore">- Read More</Link>
          </div>
        </div>
        <div className="services-section">
          <div className="container">
            <h2 className="header-text">What we do</h2>
            <p className="sub-header-text">
              We offer top notch services in the folowing fields outlined below
            </p>
            <div className="services-container">
              <div className="service">
                <b>Software Development</b>
                <p className='sub-header-text'>
                  As part of the objectives for human capital and national development, 
                  software trainings are carried out in areas of web developments.
                </p>
              </div>
              <div className="service">
                <b>Training / Internhip</b>
                <p className='sub-header-text'>
                  As part of the objectives for human capital and national development, 
                  software trainings are carried out in areas of web developments.
                </p>
              </div>
              <div className="service">
                <b>Ai / Machine Learning</b>
                <p className='sub-header-text'>
                  As part of the objectives for human capital and national development, 
                  software trainings are carried out in areas of web developments.
                </p>
              </div>
              <div className="service">
                <b>Research</b>
                <p className='sub-header-text'>
                  As part of the objectives for human capital and national development, 
                  software trainings are carried out in areas of web developments.
                </p>
              </div>
            </div>
            <Link  to='' className='explore'>- Explore Services</Link>
          </div>
        </div>
        <div className="core-values-section">
          <div className="container">
            <h2 className="header-text">Our Core Values</h2>
            <div className="core-values">
              <div className="value">
                <b>Deligence</b>
                <p>
                  We persistently pursue excellence in software development and embrace technological change.
                </p>
                <div>
                  <img src={research} alt="" />
                </div>
              </div>
              <div className="value">
                <b>Integrity</b>
                <p>
                  We prioritize honesty and transparency in all interactions,
                  fostering strong and lasting relationships with our clients, partners, and team
                </p>
                <div>
                  <img src={secure} alt="" />
                </div>
              </div>
              <div className="value">
                <b>Excellence</b>
                <p>
                  Empowering futures with cutting-edge AI and machine learning, offering transformative internships and training.
                </p>
                <div>
                  <img src={leader} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action-section">
          <div className="container">
            <div>
              <b>
                Let's create <br />
                Something beautiful <br />
                Together...
              </b>
              <Link to="/contact">
                <button>Send a Messaage</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="tutorials-section">
          <div className="container">
            <h2 className='header-text'>Tutorials</h2>
            <p className='sub-header-text'>
              As part of the objectives for human capital and national development, 
              software trainings.   
            </p>
            <div className="tutorials-container">
              <a href='#' className="tutorial">
                <div className="tutorial_thumbnail">
                  <img src={banner} alt="tutorial thumbnail" />
                </div>
                <div className="tutorial_info">
                  <div className="tutorial_tags">
                    <span>Python</span>
                    <span>Pandas</span>
                    <span>Numpy</span>
                  </div>
                  <b className="tutorial_header">
                    How to train a large csv data using Python
                  </b>
                  <p>
                    As part of the objectives for human capital and national development, 
                    software trainings.
                    As part of the objectives for human capital...
                  </p>
                </div>
              </a>
              <a href='#' className="tutorial">
                <div className="tutorial_thumbnail">
                  <img src={banner} alt="tutorial thumbnail" />
                </div>
                <div className="tutorial_info">
                  <div className="tutorial_tags">
                    <span>ReactJs</span>
                    <span>Rapid api</span>
                  </div>
                  <b className="tutorial_header">
                    Building an Ai website using reactJs and RapidApi
                  </b>
                  <p>
                    As part of the objectives for human capital and national development, 
                    software trainings.
                    As part of the objectives for human capital...
                  </p>
                </div>
              </a>
            </div>
            <a href='#' className="explore">- Explore Tutorials</a>
          </div>
        </div>
        <div className="blog-section">
          <div className="container">
            <h2 className="header-text">
              Read our blogs
            </h2>
            <p className="sub-header-text">
              High quality blogs curated just for you.
            </p>
            <div className="blogs-container">
              <Link to="#" className="blog">
                <div className="blog_thumbnail">
                <img src={blog_thumbnail3} alt="blog thumbnail " />
                </div>
                <div className="blog_details">
                  <div className="blog_insight">
                    <div className="blog_writer_details">
                      <div className="blog_writer_thumbnail">
                        <img src={johnbaba} alt="blog writer image" />
                      </div>
                      <span>John Shaibu</span>
                    </div>
                    <span> • </span>
                    <p>10 mins read</p>
                  </div>
                  <b>10 reasons you need a website for your business.</b>
                </div>
              </Link>
              <Link to="#" className="blog">
                <div className="blog_thumbnail">
                <img src={blog_thumbnail2} alt="blog thumbnail " />
                </div>
                <div className="blog_details">
                  <div className="blog_insight">
                    <div className="blog_writer_details">
                      <div className="blog_writer_thumbnail">
                        <img src={johnbaba} alt="blog writer image" />
                      </div>
                      <span>John Shaibu</span>
                    </div>
                    <span> • </span>
                    <p>10 mins read</p>
                  </div>
                  <b>Why Ai might take your job in the future if you belong to these group.</b>
                </div>
              </Link>
              <Link to="#" className="blog">
                <div className="blog_thumbnail">
                <img src={blog_thumbnail4} alt="blog thumbnail " />
                </div>
                <div className="blog_details">
                  <div className="blog_insight">
                    <div className="blog_writer_details">
                      <div className="blog_writer_thumbnail">
                        <img src={johnbaba} alt="blog writer image" />
                      </div>
                      <span>John Shaibu</span>
                    </div>
                    <span> • </span>
                    <p>5 mins read</p>
                  </div>
                  <b>10 Lucrative side hustle in Nigeria you can venture in outside tech.</b>
                </div>
              </Link>
              <Link to="#" className="blog">
                <div className="blog_thumbnail">
                <img src={blog_thumbnail3} alt="blog thumbnail " />
                </div>
                <div className="blog_details">
                  <div className="blog_insight">
                    <div className="blog_writer_details">
                      <div className="blog_writer_thumbnail">
                        <img src={johnbaba} alt="blog writer image" />
                      </div>
                      <span>John Shaibu</span>
                    </div>
                    <span> • </span>
                    <p>15 mins read</p>
                  </div>
                  <b>Top 10 books to read as a programmer that will make you 10x better</b>
                </div>
              </Link>
            </div>
            <Link to="#" className='explore'>- Read more blogs</Link>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home