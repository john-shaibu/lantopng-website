import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div>

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
    </footer>
  )
}

export default Footer