import companyLogo from "/icons/LANTOP LOGO.svg";
import { Link } from "react-router-dom";
import {
     GithubLogo,
     YoutubeLogo,
     WhatsappLogo,
     FacebookLogo,
     InstagramLogo,
} from "@phosphor-icons/react";

const Footer = () => {
     return (
          <footer>
               <div className="container">
                    <div>
                         <div className="company_logo">
                              <Link to="/">
                                   <img
                                        src={companyLogo}
                                        alt="Lantop infotech logo"
                                   />
                              </Link>
                         </div>
                         <p>
                              Unique tech company that owns top-notch services
                              for both individual and National Development.
                         </p>
                         <div className="contact">
                              <b>Contact Us:</b>
                              <a href="tel:+234 810 301 7863">+234 810 301 7863</a>
                              <b>Send us an email:{" "}</b>
                              <a href="mailto:freelance@lantopinfotech.com">freelance@lantopinfotech.com</a>
                          </div>
                         <div className="footer_socials">
                              <b>Follow us on social media:</b>
                              <ul>
                                   <li>
                                        <a href="https://youtube.com/@lantop7801?si=mZVwOq5uy2pnAc1I">
                                             <YoutubeLogo
                                                  size={24}
                                                  weight="fill"
                                             />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://wa.me/message/FRZ76MRUIUFGK1">
                                             <WhatsappLogo
                                                  size={24}
                                                  weight="fill"
                                             />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://github.com/Lantop1k">
                                             <GithubLogo
                                                  size={24}
                                                  weight="fill"
                                             />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://web.facebook.com/lantopinfotech">
                                             <FacebookLogo
                                                  size={24}
                                                  weight="fill"
                                             />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.instagram.com">
                                             <InstagramLogo
                                                  size={24}
                                                  weight="fill"
                                             />
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="navigations">
                         <b>Navigation</b>
                         <div>
                              <Link to="">Home</Link>
                              <Link to="/about">Who we are?</Link>
                              <Link to="/services">What we do</Link>
                              <Link to="/tutorials">Additional Services</Link>
                              <Link to="/contact">Contact Us</Link>
                         </div>
                    </div>
                    <div className="resources">
                         <b>Resources</b>
                         <div>
                              <Link to="/blog">Blogs</Link>
                              <Link to="/career">Internship</Link>
                              <Link to="/blog">Newsletter</Link>
                              <Link to="">Privacy Policy</Link>
                              <Link to="">Terms and Conditions</Link>
                         </div>
                    </div>
               </div>
               <div className="copyright">
                    <p>Copyright &copy; 2024 All Rights Reserved</p>
               </div>
          </footer>
     );
};

export default Footer;
