import React, { useState, useEffect } from 'react';
import SkeletonCard from '../common/SkeletonCard';

const NewsUpdates = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data from a database (takes 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Dummy data for the cards
  const newsItems = [
    { id: 1, title: "National Athletes Prepare for Upcoming SEA Games", date: "April 5, 2026" },
    { id: 2, title: "Grassroots Sports Program Reaches New Provinces", date: "April 2, 2026" },
    { id: 3, title: "New Training Facilities Opened in Visayas Region", date: "March 28, 2026" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ph-blue dark:text-white mb-4">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-ph-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show exactly 3 skeletons while loading
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            // Map through our "fetched" data and show real cards once loaded
            newsItems.map((item, index) => (
              <div 
                key={item.id} 
                // AOS attributes control the scroll animation
                data-aos="fade-up" 
                data-aos-delay={index * 100} // Staggers the animation (100ms, 200ms, 300ms)
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                {/* Real Image Placeholder */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                  Image Placeholder
                </div>
                <div className="p-5">
                  <p className="text-sm text-ph-red dark:text-ph-yellow font-bold mb-2">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    Read the full details about how the commission is supporting our local athletes and developing sports infrastructure...
                  </p>
                  <button className="text-white bg-ph-blue hover:bg-blue-800 px-4 py-2 rounded-md font-medium transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default NewsUpdates;