import React from "react";
import "../styles/home.css";
import heroimage from "/images/hero image.jpg";
import banner from "/images/banner.png";

import research from "/illustrations/research.svg";
import secure from "/illustrations/secure.svg";
import leader from "/illustrations/leader.svg";

import companyLogo from "/icons/LANTOP LOGO.svg";

import johnbaba from "/images/johnbaba.jpg";

import blog_thumbnail from "/images/eagle_logo.png";
import pca from "/images/pca.webp";
import blog_thumbnail3 from "/images/robot.jpg";
import blog_thumbnail4 from "/images/hero image.jpg";
import matlab from "/images/matlab.svg";
import dataIntegration from "/images/data-integration.svg";

import { Routes, NavLink, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";
import HomeBlogItem from "./components/HomeBlogItem";

const Home = () => {
     const [openMenu, setOpenMenu] = useState(false);

     const openMenuDropdown = () => {
          setOpenMenu(true);
          document.body.classList.add("dropdownMenuOpened");
     };
     const closeMenuDropdown = () => {
          setOpenMenu(false);
          document.body.classList.remove("dropdownMenuOpened");
     };
     useEffect(() => {
          return () => {
               // This cleanup function will be called when the component unmounts
               closeMenuDropdown();
          };
     }, []);

     const feedbackData = [
          {
               id: 1,
               text: 'I will like to describe my experience at Lantop Infotech in one word "exceptional", cause its the best you can get anywhere all over the word. Would definitely recommend.',
               author: "John Doe",
               post: "Software Engineer",
          },
          {
               id: 2,
               text:
                    "Working with Lantop Infotech was a game-changer for our business. " +
                    "Their web development expertise helped us revamp our online presence, and their AI-driven solutions boosted our efficiency. " +
                    "Plus, their research and project writing team delivered top-notch results for our proposals. " +
                    "Truly a one-stop solution for tech and research needs!",
               author: "Jamiu Adewale",
               post: "Head of operations, Optimal",
          },
          {
               id: 3,
               text: " As an intern at Lantop, I had an incredible learning experience. Their training program provided me with a solid foundation in web development and AI. The hands-on projects were invaluable in honing my skills, and the mentorship I received was exceptional. I am now a confident developer, thanks to Lantop infotech",
               author: "Robert Johnson",
               post: "Former Intern",
          },
          {
               id: 4,
               text:
                    "Interning at Lantop Infotech was a turning point in my career." +
                    "The exposure to real-world research and project writing tasks was enlightening. " +
                    "The guidance and feedback from experienced professionals were instrumental in my growth. " +
                    "I left with not just knowledge but also practical skills that set me apart in my field",
               author: "Olapoju Samuel",
               post: "Former Intern",
          },
          {
               id: 5,
               text:
                    "We engaged Lantop for research writing services," +
                    "and they delivered outstanding results. Their team's ability to conduct thorough research and craft " +
                    "compelling content was impressive. They took our project to the next level, " +
                    "and we are extremely satisfied with their professionalism and expertise.",
               author: "Fred Golfman",
               post: "Project writing Client",
          },
     ];
     const [currentSlide, setCurrentSlide] = useState(0);

     // Auto-scroll the slider
     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentSlide(
                    (prevSlide) => (prevSlide + 1) % feedbackData.length
               );
          }, 5000); // Change slide every 5 seconds (adjust as needed)

          return () => {
               clearInterval(interval);
          };
     }, []);

     const handleIndicatorClick = (index) => {
          setCurrentSlide(index);
     };

     const blogItems = [
          {
               link: "/blog/data-integration-modern-businesses",
               thumbnail: dataIntegration,
               authorImage: johnbaba,
               authorName: "John Shaibu",
               readTime: "10 mins read",
               title: "The growing importance of data integration in modern businesses",
          },
          {
               link: "/blog/object-motion-gravity-air-resistance",
               thumbnail: matlab,
               authorImage: johnbaba,
               authorName: "John Shaibu",
               readTime: "10 mins read",
               title: "Simulating Object Motion Under Gravity with Air Resistance: A MATLAB Implementation",
          },
          {
               link: "/blog/pca-implementation-guide",
               thumbnail: pca,
               authorImage: johnbaba,
               authorName: "John Shaibu",
               readTime: "5 mins read",
               title: "A Comprehensive Guide to Implementing Principal Component Analysis (PCA) in MATLAB",
          },
          {
               link: "/blog/1",
               thumbnail: blog_thumbnail3,
               authorImage: johnbaba,
               authorName: "John Shaibu",
               readTime: "15 mins read",
               title: "Top 10 books to read as a programmer that will make you 10x better",
          },
     ];

     return (
          <div className="site">
               <div className="hero">
                    <Menu closeMenuDropdown={closeMenuDropdown} />
                    <div className="heroInner">
                         <Header
                              openMenuDropdown={openMenuDropdown}
                              companyLogo={companyLogo}
                         />
                         <div className="right">
                              <img
                                   src={heroimage}
                                   alt="Picture of a man using a Vr or virtual reality"
                              />
                         </div>
                         <div className="left">
                              <div className="heroText">
                                   <span>Web • Research • Training</span>
                                   <h1>
                                        We are a <br />
                                        <span className="gradient-text">
                                             Tech Solution
                                        </span>
                                        <br />
                                        Provider
                                   </h1>
                                   <p>
                                        Unique tech company that owns top-notch
                                        services for both individual and
                                        National Development.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="insights">
                    <div className="container">
                         <div>
                              <b className="gradient-text">500+</b>
                              <span>Students Trained</span>
                         </div>
                         <div>
                              <b className="gradient-text">1000+</b>
                              <span>Projects completed</span>
                         </div>
                         <div>
                              <b className="gradient-text">100+</b>
                              <span>Team members</span>
                         </div>
                         <div>
                              <b className="gradient-text">10+</b>
                              <span>Years of experience</span>
                         </div>
                    </div>
               </div>
               <div className="mission-section">
                    <div className="container">
                         <h2 className="header-text">Our Mission</h2>
                         <p className="sub-header-text">
                              As part of the objectives for human capital and
                              national development, software trainings are
                              carried out in areas of web developments, software
                              development training, data science, artificial
                              intelligence & robotics and computer proficiency
                              with opening for an arter-training mentorship and
                              internships.
                              <br />
                              <br />
                              Our Mission is to stand out in building a
                              friendly, mutual beneficial and customer-centric
                              professional and innovative workforce that
                              painstakenly provides solutions to all kinds of
                              Technology problems and bolsters human capital
                              development.
                         </p>
                         <Link to="/company" className="explore">
                              - Read More
                         </Link>
                    </div>
               </div>
               <div className="services-section">
                    <div className="container">
                         <h2 className="header-text">What we do</h2>
                         <p className="sub-header-text">
                              We offer top notch services in the folowing fields
                              outlined below
                         </p>
                         <div className="services-container">
                              <div className="service">
                                   <b>Software Development</b>
                                   <p className="sub-header-text">
                                        Our team of skilled full-stack
                                        developers understands the intricate
                                        dance between front-end and back-end
                                        development. We specialize in creating
                                        softwares that captivate your audience,
                                        while also ensuring they run smoothly
                                        under the hood. Join us on this exciting
                                        journey of innovation, learning, and
                                        growth. Let's shape the future of the
                                        web together.
                                   </p>
                              </div>
                              <div className="service">
                                   <b>Training / Internhip</b>
                                   <p className="sub-header-text">
                                        Are you a passionate learner looking to
                                        kickstart your career in software
                                        engineering? Or perhaps you're seeking
                                        hands-on experience to take your skills
                                        to the next level? Look no further! Our
                                        comprehensive internship programs are
                                        designed to provide you with real-world
                                        experience and the knowledge you need to
                                        succeed in this ever-evolving field.
                                   </p>
                              </div>
                              <div className="service">
                                   <b>Ai / Machine Learning</b>
                                   <p className="sub-header-text">
                                        In the age of intelligence, we believe
                                        in harnessing the potential of Machine
                                        Learning and AI to solve complex
                                        problems and make groundbreaking
                                        advancements. From predictive analytics
                                        to natural language processing, we're at
                                        the forefront of developing AI-driven
                                        solutions that shape the future.
                                   </p>
                              </div>
                              <div className="service">
                                   <b>Research</b>
                                   <p className="sub-header-text">
                                        Do you have a vision that requires
                                        thorough research and expert project
                                        execution? Whether it's an academic
                                        research paper, a business proposal, or
                                        a tech project, we offer comprehensive
                                        research writing and project development
                                        services. Our team of skilled
                                        professionals is committed to providing
                                        you with exceptional results.
                                   </p>
                              </div>
                         </div>
                         <Link to="/services" className="explore">
                              - Explore Services
                         </Link>
                    </div>
               </div>
               <div className="core-values-section">
                    <div className="container">
                         <h2 className="header-text">Our Core Values</h2>
                         <div className="core-values">
                              <div className="value">
                                   <b>Deligence</b>
                                   <p>
                                        We persistently pursue excellence in
                                        software development and embrace
                                        technological change.
                                   </p>
                                   <div>
                                        <img src={research} alt="" />
                                   </div>
                              </div>
                              <div className="value">
                                   <b>Integrity</b>
                                   <p>
                                        We prioritize honesty and transparency
                                        in all interactions, fostering strong
                                        and lasting relationships with our
                                        clients, partners, and team
                                   </p>
                                   <div>
                                        <img src={secure} alt="" />
                                   </div>
                              </div>
                              <div className="value">
                                   <b>Excellence</b>
                                   <p>
                                        Empowering futures with cutting-edge AI
                                        and machine learning, offering
                                        transformative internships and training.
                                   </p>
                                   <div>
                                        <img src={leader} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="feedback-section">
                    <div className="container">
                         <div className="feedbacks-container">
                              <h2 className="header-text">Feedback</h2>
                              <p className="sub-header-text">
                                   Here are some feedbacks from students we have
                                   trained and clients we have worked with in
                                   the past.
                              </p>
                              <div className="feedback">
                                   {feedbackData.map((feedback, index) => (
                                        <div
                                             key={feedback.id}
                                             className={`feedback-inner slide ${
                                                  index === currentSlide
                                                       ? "active"
                                                       : ""
                                             }`}
                                        >
                                             <p>{feedback.text}</p>
                                             <b>{feedback.author}</b>
                                             <span>- {feedback.post}</span>
                                        </div>
                                   ))}
                                  
                                   <div className="pagination">
                                        {feedbackData.map((_, index) => (
                                             <div
                                                  key={index}
                                                  className={`pagination-dots indicator ${
                                                       index === currentSlide
                                                            ? "active-indicator"
                                                            : ""
                                                  }`}
                                                  onClick={() =>
                                                       handleIndicatorClick(
                                                            index
                                                       )
                                                  }
                                             />
                                        ))}
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
               <div className="blog-section">
                    <div className="container">
                         <h2 className="header-text">Read our blogs</h2>
                         <p className="sub-header-text">
                              High quality blogs curated just for you.
                         </p>
                         <div className="blogs-container">
                              {blogItems.map((item, index) => (
                                   <HomeBlogItem
                                        key={index}
                                        link={item.link}
                                        thumbnail={item.thumbnail}
                                        authorImage={item.authorImage}
                                        authorName={item.authorName}
                                        readTime={item.readTime}
                                        title={item.title}
                                   />
                              ))}
                         </div>
                         <Link to="/blog" className="explore">
                              - Read more blogs
                         </Link>
                    </div>
               </div>
               <Footer />
          </div>
     );
};

export default Home;
