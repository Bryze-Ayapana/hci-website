import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import SplashScreen from './components/common/SplashScreen';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import Procurement from './pages/Procurement'; // ADD THIS IMPORT
import Contact from './pages/Contact';


function App() {
  // 1. Set this back to true so the splash screen starts!
  const [isLoading, setIsLoading] = useState(true);

  // 2. This useEffect initializes your scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // 3. This useEffect handles the 2.5 second Splash Screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <AnimatePresence>
          {isLoading && <SplashScreen />}
        </AnimatePresence>

        {!isLoading && (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Main content expands to push the footer down if the page is short */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/procurement" element={<Procurement />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </main>

            {/* Add Footer Here */}
            <Footer />
            
          </div>
        )}

      </div>
    </Router>
  );
}

export default App;