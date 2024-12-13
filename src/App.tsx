import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import { useScrollToTop } from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}