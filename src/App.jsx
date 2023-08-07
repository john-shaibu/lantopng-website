import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

function App() {

  return (
    <>
      {/* <h2>johnbaba is here</h2> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
