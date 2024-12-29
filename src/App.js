import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import ProjectDetails from './pages/projectDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer';
import Aboutpage from './pages/aboutpage';
import { MenuProvider } from './menuContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// ScrollToTop Component
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <MenuProvider>
      <div>
        <Router>
          <ScrollToTop /> {/* Add ScrollToTop here */}
          <Navbar />
          <div className=''>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<Aboutpage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </MenuProvider>
  );
};

export default App;
