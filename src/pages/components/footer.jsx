import React from 'react';
import companyLogo from "/icons/LANTOP LOGO.svg";
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo, InstagramLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div>
            <div className="company_logo">
              <Link to="/">
              <img src={companyLogo} alt="Lantop infotech logo" />
              </Link>
            </div>
              <p>
                Unique tech company that owns top-notch services for both individual and National Development.
              </p>
              <div className="footer_socials">
                <b>Follow us on social media:</b>
                <ul>
                  <li>
                    <a href="">
                      <YoutubeLogo size={24} weight='fill' />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <InstagramLogo size={24} weight='fill' />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <TwitterLogo size={24} weight='fill' />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <GithubLogo size={24} weight='fill' />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <LinkedinLogo size={24} weight='fill' />
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <div className='navigations'>
            <b>Navigation</b>
            <div>
              <Link to=''>Home</Link>
              <Link to=''>Who we are?</Link>
              <Link to=''>What we do</Link>
              <Link to=''>Additional Services</Link>
              <Link to=''>Contact Us</Link>
            </div>
          </div>
          <div className='resources'>
            <b>Resources</b>
            <div>
              <Link to=''>Blogs</Link>
              <Link to=''>Internship</Link>
              <Link to=''>Newsletter</Link>
              <Link to=''>Privacy Policy</Link>
              <Link to=''>Terms and Conditions</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>           
            Copyright &copy; 2024 All Rights Reserved
          </p>
        </div>
    </footer>
  )
}

export default Footer