import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Blog from './pages/blog-posts/blog';
import BlogPage from './pages/blog_home';
import Tutorials from './pages/Tutorials';

function App() {

  return (
    <>
      {/* <h2>johnbaba is here</h2> */}
      <Router>
        <Routes>
          {/* <Switch> */}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/company' element={<About />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/tutorials' element={<Tutorials />} />
            <Route exact path='/blog'>
              <Route exact path='1' element={<Blog />}/>
              <Route exact path='2' element={<Blog />}/>
              <Route exact path='3' element={<Blog />}/>
              <Route exact path='4' element={<Blog />}/>
              <Route exact path='5' element={<Blog />}/>
              <Route exact path='6' element={<Blog />}/>
              <Route exact path='7' element={<Blog />}/>
              <Route exact path='' element={<BlogPage />} />
            </Route>
            <Route exact path='/contact' element={<Contact />} />
          {/* </Switch> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
