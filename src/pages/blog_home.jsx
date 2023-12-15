import React from 'react';
import { Outlet, Link} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import "../styles/blog_home.css";
import thumbnail from "/images/robot.jpg";
import thumbnail2 from "/images/ai.jpg";
import thumbnail3 from "/images/eagle_logo.png";

const BlogPage = () => {
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

      <div className='blog-homepage-header'>
        <div className="container">
          <span className='sub-header-text'>Our Blogs</span>
          <h2 className='header-text gradient-text'>Writings from our team</h2>
          <p className='sub-header-text'>The latest industry news, interviews, technologies, resources and much more.</p>
        </div>
      </div>
      <div className="latest-blog">
        <div className="container">
          <div className="latest-blog-container">
            <div className="latest-blog-inner">
              <div className="latest-blog-insight">
                <span>John Shaibu • 9th June 2023</span>
              </div>
              <b className='blog-topic'>
                The growing importance of data integration in modern businesses
              </b>
              <p>
                In the era of digital transformation, data isn't just a commodity – 
                it's a strategic asset that powers the engine of modern business. 
              </p>
              <ul>
                <li>Data integration</li>
                <li>Software Engineering</li>
                <li>Data analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='published-blogs'>
        <div className="container">
          <div className="published-blog-container">
            <Link to="#" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>Mastering python DateTime Library</b>
                <p>
                  In the era of digital transformation, data isn't just a commodity
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
            <Link to="#" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail2} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>Introdction to react router v6.0</b>
                <p>
                  In the era of digital transformation, data isn't just a commodity
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
            <Link to="#" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail3} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>How collaboration makes us better programmer</b>
                <p>
                  In the era of digital transformation, data isn't just a commodity
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
            <Link to="/blog/2" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>10 Evergreen Reasons Why Your Business Needs a Website</b>
                <p>
                  In today's digital age, establishing a strong online presence is imperative...
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
            <Link to="#" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>Lucrative side hustles you can venture in.</b>
                <p>
                  In the era of digital transformation, data isn't just a commodity
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
            <Link to="#" className="published-blog">
              <div className="published-blog-thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="published-blog-details">
                <span>John Shaibu • 9th June 2023</span>
                <b>Introduction to technical Writing</b>
                <p>
                  In the era of digital transformation, data isn't just a commodity
                </p>
                <ul>
                  <li>python</li>
                  <li>Datetime</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <Outlet /> */}

      <Footer/>
    </div>
  )
}

export default BlogPage