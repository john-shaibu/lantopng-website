import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import { useState, useEffect } from "react";
import companyLogo from "/icons/lantoplogo2.svg";
import "../styles/blog_home.css";
import thumbnail from "/images/robot.jpg";
import thumbnail2 from "/images/ai.jpg";
import thumbnail3 from "/images/eagle_logo.png";
import BlogItem from "./components/BlogItem";

const BlogPage = () => {
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

     const blogs = [
          {
               link: "#",
               thumbnail: thumbnail,
               date: "John Shaibu • 9th June 2023",
               title: "Lucrative side hustles you can venture in.",
               description:
                    "In the era of digital transformation, data isn't just a commodity",
               tags: ["python", "Datetime"],
          },
          {
               link: "#",
               thumbnail: thumbnail2,
               date: "Jane Doe • 10th June 2023",
               title: "Introduction to React Router v6.0",
               description:
                    "React Router v6.0 brings a lot of new features and improvements.",
               tags: ["react", "router"],
          },
          {
               link: "#",
               thumbnail: thumbnail3,
               date: "John & Olarenwaju • 1st January 2025",
               title: "Simulating Object Motion Under Gravity with Air Resistance: A MATLAB Implementation",
               description:
                    "Have you ever wondered how objects really fall in the real world? ",
               tags: ["collaboration", "programming"],
          },
          {
               link: "#",
               thumbnail: thumbnail,
               date: "Alice Johnson • 12th June 2023",
               title: "10 Evergreen Reasons Why Your Business Needs a Website",
               description:
                    "In today's digital age, establishing a strong online presence is imperative.",
               tags: ["business", "website"],
          },
          {
               link: "#",
               thumbnail: thumbnail2,
               date: "Bob Brown • 13th June 2023",
               title: "Introduction to Technical Writing",
               description:
                    "Technical writing is an essential skill for any developer.",
               tags: ["writing", "technical"],
          },
     ];
     return (
          <div>
               <Header
                    openMenuDropdown={openMenuDropdown}
                    companyLogo={companyLogo}
               />
               <Menu closeMenuDropdown={closeMenuDropdown} />

               <div className="blog-homepage-header">
                    <div className="container">
                         <span className="sub-header-text">Our Blogs</span>
                         <h2 className="header-text gradient-text">
                              Writings from our team
                         </h2>
                         <p className="sub-header-text">
                              The latest industry news, interviews,
                              technologies, resources and much more.
                         </p>
                    </div>
               </div>
               <div className="latest-blog">
                    <div className="container">
                         <div className="latest-blog-container">
                              <div className="latest-blog-inner">
                                   <div className="latest-blog-insight">
                                        <span>John Shaibu • 9th June 2023</span>
                                   </div>
                                   <b className="blog-topic">
                                        The growing importance of data
                                        integration in modern businesses
                                   </b>
                                   <p>
                                        In the era of digital transformation,
                                        data isn&apos;t just a commodity – it&apos; s a
                                        strategic asset that powers the engine
                                        of modern business.
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
               <div className="published-blogs">
                    <div className="container">
                         <div className="published-blog-container">
                              {blogs.map((blog, index) => (
                                   <BlogItem
                                        key={index}
                                        link={blog.link}
                                        thumbnail={blog.thumbnail}
                                        date={blog.date}
                                        title={blog.title}
                                        description={blog.description}
                                        tags={blog.tags}
                                   />
                              ))}
                         </div>
                    </div>
               </div>

               {/* <Outlet /> */}

               <Footer />
          </div>
     );
};

export default BlogPage;
