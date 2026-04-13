import React, { useState, useEffect } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';



const NewsUpdates = () => {

  const [isLoading, setIsLoading] = useState(true);



  // ── UPPER BANNER LOGIC ──

  const [upperIndex, setUpperIndex] = useState(0);

  const upperBanners = [

    { id: 1, src: '/upperBanner1.png', alt: '2025 Junior Level Science Scholarships' },

    { id: 2, src: '/upperBanner2.png', alt: 'Upper Banner 2' },

    { id: 3, src: '/upperBanner3.png', alt: 'Upper Banner 3' },

  ];



  // ── LOWER CAROUSEL LOGIC ──

  const [lowerIndex, setLowerIndex] = useState(0);

  const lowerBanners = [

    { id: 1, src: '/lowerBanner1.png', date: 'March 19, 2026', title: 'Explore augmented reality for classroom instruction' },

    { id: 2, src: '/lowerBanner2.png', date: 'March 18, 2026', title: 'Scholar-volunteer sparks curiosity through storytelling' },

    { id: 3, src: '/lowerBanner3.png', date: 'March 15, 2026', title: 'Region III launches its first 21st CLEM classroom' },

    { id: 4, src: '/lowerBanner4.png', date: 'March 10, 2026', title: 'New sports science facility opens' },

  ];



  // Number of cards to show at once on desktop

  const visibleCards = 3;



  useEffect(() => {

    // Simulate loading

    const timer = setTimeout(() => setIsLoading(false), 800);

    return () => clearTimeout(timer);

  }, []);



  // Handlers for the lower carousel

  const nextLower = () => {

    setLowerIndex((prev) => (prev + 1 > lowerBanners.length - visibleCards ? 0 : prev + 1));

  };



  const prevLower = () => {

    setLowerIndex((prev) => (prev === 0 ? lowerBanners.length - visibleCards : prev - 1));

  };



  // Auto-scroll the upper banner every 5 seconds

  useEffect(() => {

    const timer = setInterval(() => {

      setUpperIndex((prev) => (prev + 1) % upperBanners.length);

    }, 5000);

    return () => clearInterval(timer);

  }, [upperBanners.length]);



  return (

<section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       

{/* Header Title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight flex items-end gap-2 md:gap-3 uppercase drop-shadow-sm">
            {/* PSC - Yellow/Gold Gradient */}
            <span className="bg-gradient-to-r from-ph-yellow to-yellow-500 dark:from-[#fbd11e] dark:to-[#fdff8d] bg-clip-text text-transparent">
              PSC
            </span>
            
            {/* TODAY - Blue/Cyan Gradient */}
            <span className="bg-gradient-to-r from-ph-blue to-blue-700 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              TODAY
            </span>
          </h2>
        </div>


        {isLoading ? (

          // Simple loading skeleton structure

          <div className="animate-pulse space-y-6">

             <div className="w-full h-[300px] md:h-[400px] bg-gray-200 dark:bg-gray-800 rounded-xl"></div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

               <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>

               <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>

               <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>

             </div>

          </div>

        ) : (

          <div className="space-y-6">

           

            {/* ── 1. UPPER CAROUSEL (FEATURED BANNER) ── */}

            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg group">

              {/* Image */}

              <img

                src={upperBanners[upperIndex].src}

                alt={upperBanners[upperIndex].alt}

                className="w-full h-full object-cover transition-opacity duration-500"

              />

             

              {/* Optional: Add manual controls to the upper banner if you want them */}

              <div className="absolute bottom-4 right-4 flex gap-2">

                {upperBanners.map((_, idx) => (

                  <button

                    key={idx}

                    onClick={() => setUpperIndex(idx)}

                    className={`w-2.5 h-2.5 rounded-full transition-all ${upperIndex === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}

                  />

                ))}

              </div>

            </div>



            {/* ── 2. LOWER CAROUSEL (NEWS CARDS) ── */}

            <div className="relative group">

             

              {/* Left Arrow Button */}

              <button

                onClick={prevLower}

                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 backdrop-blur text-white flex items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100"

              >

                <FiChevronLeft size={24} />

              </button>



              {/* Overflow Container */}

              <div className="overflow-hidden rounded-xl">

                {/* The sliding track */}

                <div

                  className="flex transition-transform duration-500 ease-in-out gap-6"

                  style={{ transform: `translateX(-${lowerIndex * (100 / visibleCards)}%)` }}

                >

                  {lowerBanners.map((item) => (

                    // Each card takes up 1/3 of the space on desktop

                    <div key={item.id} className="min-w-full md:min-w-[calc(33.333%-16px)] relative h-48 md:h-56 rounded-xl overflow-hidden shadow-md group/card cursor-pointer">

                      <img

                        src={item.src}

                        alt={item.title}

                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"

                      />

                     

                      {/* Dark gradient overlay for text readability */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                     

                      {/* Date Badge */}

                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md">

                        {item.date}

                      </div>



                      {/* Title Text */}

                      <div className="absolute bottom-0 left-0 w-full p-4">

                        <h3 className="text-white text-sm font-bold leading-snug line-clamp-2">

                          {item.title}

                        </h3>

                      </div>

                    </div>

                  ))}

                </div>

              </div>



              {/* Right Arrow Button */}

              <button

                onClick={nextLower}

                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 backdrop-blur text-white flex items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100"

              >

                <FiChevronRight size={24} />

              </button>



            </div>

          </div>

        )}



      </div>

    </section>

  );

};



export default NewsUpdates;