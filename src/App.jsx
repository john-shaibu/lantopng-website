
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom"
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
import Syllabus from './pages/Syllabus';
import Track from './pages/syllabus/Track';
import ScrollToTop from './pages/ScrollToTop'

function App() {


  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/company' element={<About />} />
            <Route  path='/services' element={<Services />} />
            <Route  path='/tutorials' element={<Tutorials />} />
            <Route  path='/syllabus'>    
              <Route path='' element={<Syllabus />}/>
              <Route path=':trackID' element={<Track />}/>
            </Route>
            <Route  path='/blog'>
              <Route path=':blogID' element={<Blog1 />}/>
              <Route path='' element={<BlogPage />} />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Contact />} />
            <Route path='*' element={<Contact />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
