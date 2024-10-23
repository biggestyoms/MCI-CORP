import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import ProjectDetails from './pages/projectDetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer';
import Aboutpage from './pages/aboutpage';

const App = () => {
  return (
    <div>
      <Router>
     <Navbar />
        <div className='' > 
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
  )
}

export default App
