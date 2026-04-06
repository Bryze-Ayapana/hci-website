import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Binago natin lahat into .jpg
  const images = [
    '/headerPicture1.jpg',
    '/headerPicture2.jpg',
    '/headerPicture3.jpg',
    '/headerPicture4.png',
    '/headerPicture5.jpg',
  ];

  useEffect(() => {
    // 10000ms = eksaktong 10 seconds bawat picture
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
<section className="relative h-screen w-full overflow-hidden bg-[#030A17] pt-32">      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // 1.5s transition para dahan-dahan ang pag-fade
            transition={{ duration: 1.5, ease: "linear" }}
            className="w-full h-full object-cover object-center absolute inset-0"
            alt="PSC Hero Background"
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlays para sa DOST-SEI look */}
      <div className="absolute inset-0 bg-[#030A17]/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030A17] via-transparent to-transparent z-10 pointer-events-none" />

      {/* Hero Text Content */}
      <div className="relative h-full w-full flex items-center z-20 px-4 md:px-20 lg:px-32">
        <div className="max-w-7xl w-full"> {/* Increased max-width to allow the full line */}
            <p className="text-white text-xs md:text-sm font-normal uppercase tracking-[0.15em] mb-0">
                Welcome to the
            </p>

            {/* Main Slogan: whitespace-nowrap keeps it on 1 line */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter whitespace-nowrap leading-none">
                {/* "The Home of" is Regular (font-normal) */}
                <span className="text-white font-normal">The Home of </span>
                
                {/* "Every Filipino Athlete" is Bold (font-bold) with Gradient */}
                <span className="font-bold bg-gradient-to-r from-ph-yellow via-white to-ph-blue bg-clip-text text-transparent italic">
                Every Filipino Athlete
                </span>
            </h1>

            {/* Sub-text: font-normal for "Regular" look */}
            <div className="mt-3 flex items-center gap-2 text-white/80 text-xs md:text-lg font-normal tracking-tight">
                <span className="w-10 h-[1px] bg-ph-red" />
                <p>Pusong Pinoy. Lakas ng Atletang Pilipino.</p>
            </div>

            <button className="mt-8 px-10 py-3 bg-ph-blue hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg">
                Learn More
            </button>
            </div>
      </div>
    </section>
  );
};

export default Hero;