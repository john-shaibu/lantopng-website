import React from 'react';
import '../../styles/blog.css';
import Header from '../components/header';
import Menu from '../components/menu';
import { useState, useEffect } from 'react';
import companyLogo from "/icons/lantoplogo2.svg";
import {CalendarBlank, ClockCountdown} from "@phosphor-icons/react"
import johnbaba from "/images/johnbaba.jpg";
import Footer from '../components/footer';


const Blog2 = () => {
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
                            <span>07-October-2023</span>    
                        </div>
                        <div className="est-read-time">
                            <ClockCountdown size={30} />
                            <span>6 minutes read </span>
                        </div>
                    </div>
                    <h1>
                        10 Evergreen Reasons Why Your Business Needs a Website
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
                    <h4>Introduction</h4>
                    <p>
                        In today's digital age, establishing a strong online presence is imperative 
                        for the success of any business. A well-crafted website acts as the cornerstone 
                        of this presence, offering a multitude of benefits that can propel your business forward. 
                        In this blog post, we will delve into the top 10 reasons why your business needs a website. 
                        What's even more exciting is that these reasons are not bound by time; 
                        they are timeless and will remain relevant in the years to come.
        
                    </p>
                    <h5>1. Online Presence and Credibility</h5>
                    <p>
                        In the era of Google searches and online reviews, having an online presence is crucial. 
                        A website serves as your virtual storefront, open 24/7, 
                        providing information about your business to potential customers. 
                        It's a mark of professionalism that enhances your credibility. 
                        Just as a well-maintained physical store can attract foot traffic, 
                        a polished website can attract online visitors.
                    </p>
                    <h5>2. Accessibility 24/7</h5>
                    <p>
                        Imagine having a salesperson working for you around the clock, even while you sleep. 
                        Your website does just that. It's accessible 24/7, allowing customers to browse your 
                        products or services and make purchases at their convenience. 
                        This accessibility can significantly increase your revenue potential.
                    </p>
                    <h5>3. Global Reach</h5>
                    <p>
                        A website transcends geographical boundaries. It gives your business a global reach that 
                        was once unimaginable for small enterprises. With the right SEO strategies, your website can attract 
                        visitors from all corners of the world, opening up new markets and opportunities.
                    </p>
                    <h5>4. Marketing and Branding</h5>
                    <p>
                        Your website is a powerful marketing tool. It's a platform where you can showcase your 
                        products or services, share your story, and build your brand. A well-designed website with consistent 
                        branding creates a memorable impression on visitors, fostering trust and loyalty.
                    </p>
                    <h5>5. Customer Engagement</h5>
                    <p>
                        Engaging with customers online is essential. Features like blogs, forums, and social media 
                        integration on your website provide platforms for interaction. By answering queries, 
                        responding to comments, and providing valuable content, 
                        you can nurture customer relationships and keep them engaged.
                    </p>
                    <h5>6. Showcase Products and Services</h5>
                    <p>
                        One of the primary purposes of a business website is to showcase what you offer. 
                        High-quality images, detailed descriptions, and customer reviews can help potential 
                        customers make informed decisions. An attractive online catalog can be a significant driver of sales.
                    </p>
                    <h5>7. Customer Reviews and Testimonials</h5>
                    <p>
                        Customer reviews and testimonials are powerful social proof. 
                        They build trust among potential customers and influence their purchasing decisions. 
                        By featuring these on your website, you're giving your customers a reason to choose your products or services over competitors
                    </p>
                    <h5>8. Data Collection and Analytics</h5>
                    <p>
                        Websites offer the advantage of collecting valuable data about your customers. 
                        With tools like Google Analytics, you can gain insights into user behavior, preferences, and demographics. 
                        This data helps you make informed business decisions and refine your marketing strategies.
                    </p>
                    <h5>9. Competitive Advantage</h5>
                    <p>
                        In a competitive business landscape, having a website can provide you with a significant advantage. 
                        It sets you apart from competitors who may not have an online presence. 
                        By showcasing your strengths and unique offerings, you can stand out in the digital crowd.
                    </p>
                    <h5>10. Adaptability and Future-Proofing</h5>
                    <p>
                        The digital world is ever-evolving. Your website can adapt and grow with your business. 
                        You can update it with the latest information, add new features, and incorporate emerging technologies. 
                        This adaptability ensures that your online presence remains relevant in the face of changing trends.
                    </p>
                    <h5>Conclusion</h5>
                    <p>
                        As we conclude, it's evident that the reasons for having a website are not limited to a specific year. 
                        These are evergreen principles that will continue to shape the way businesses operate in the digital realm. 
                        Whether you're an established enterprise or a budding startup, investing in a website is a timeless 
                        strategy that will help your business thrive for years to come. Don't wait; take the leap 
                        into the digital world and watch your business reach new heights.
                    </p>
                </div>
            </div>
           
        </div>
        <Footer />

    </div>
  )
}

export default Blog2