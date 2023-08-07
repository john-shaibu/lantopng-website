import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container">
        <div>
            <div className="have-an-idea">
            <b>Have an idea?</b>
            <Link to="#">Tell us about it</Link>
            </div>
            <div className="contact-address">
            <a href="mailto:info@lantopng.com">info@lantopng.com</a>
            <p>
                01, Kolabalogun Street, <br />
                Osogbo, Osun state,<br />
                Nigeria.
            </p>
            </div>
            <p className="privacy-policy">Privacy Policy</p>

        </div>
        <div className="footer-socials">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Thread</a>
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
        </div>
        </div>
    </footer>
  )
}

export default Footer