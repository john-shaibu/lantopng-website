
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom"
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';



import BlogPage from './pages/blog_home';
import Tutorials from './pages/Tutorials';
import Syllabus from './pages/Syllabus';
import Track from './pages/syllabus/Track';
import ScrollToTop from './pages/ScrollToTop'
import DataIntegrationModernBusinesses from "./pages/blog-posts/data-integration-modern-businesses";
import ObjectMotionGravityAirResistance from "./pages/blog-posts/object-motion-gravity-air-resistance";
import PCAImplementationGuide from "./pages/blog-posts/pca-implementation-guide";
import Career from "./pages/Career";

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
              <Route path='data-integration-modern-businesses' element={<DataIntegrationModernBusinesses />}/>
              <Route path='object-motion-gravity-air-resistance' element={<ObjectMotionGravityAirResistance />}/>
              <Route path='pca-implementation-guide' element={<PCAImplementationGuide />}/>
              <Route path='' element={<BlogPage />} />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Career />} />
            <Route path='*' element={<Contact />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
