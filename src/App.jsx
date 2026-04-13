import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import SplashScreen from './components/common/SplashScreen';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import Procurement from './pages/Procurement';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      {/* CHANGE: Changed bg-white/dark:bg-gray-900 to bg-transparent.
          This allows the glowing radial gradients in your index.css to show through.
      */}
      <div className="min-h-screen w-full bg-transparent transition-colors duration-300">
        
        <AnimatePresence>
          {isLoading && <SplashScreen />}
        </AnimatePresence>

        {!isLoading && (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* The zoom property in index.css will now handle the scaling 
                of this entire content block, including the Navbar.
            */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/procurement" element={<Procurement />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/transparency" element={<Transparency />} />
              </Routes>
            </main>

            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;