import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';


// BLOGS IMPORTS
import Blog1 from './pages/blog-posts/blog1';
import Blog2 from './pages/blog-posts/blog2';
import Blog3 from './pages/blog-posts/blog3';
import Blog4 from './pages/blog-posts/blog4';
import Blog5 from './pages/blog-posts/blog5';
import Blog6 from './pages/blog-posts/blog6';
import Blog7 from './pages/blog-posts/blog7';
import Blog8 from './pages/blog-posts/blog8';


import BlogPage from './pages/blog_home';
import Tutorials from './pages/Tutorials';
// import ScrollToTop from './pages/ScrollToTop'

function App() {

  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          {/* <Switch> */}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/company' element={<About />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/tutorials' element={<Tutorials />} />
            <Route exact path='/blog'>
              <Route exact path='1' element={<Blog1 />}/>
              <Route exact path='2' element={<Blog2 />}/>
              <Route exact path='3' element={<Blog3 />}/>
              <Route exact path='4' element={<Blog4 />}/>
              <Route exact path='5' element={<Blog5 />}/>
              <Route exact path='6' element={<Blog6 />}/>
              <Route exact path='7' element={<Blog7 />}/>
              <Route exact path='8' element={<Blog8 />}/>
              <Route exact path='' element={<BlogPage />} />
            </Route>
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
