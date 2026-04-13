import React from 'react';

const SkeletonCard = () => {
  return (
    // animate-pulse creates the breathing loading effect for the whole section
    <div className="space-y-6 w-full animate-pulse">
      
      {/* 1. Upper Banner Skeleton */}
      <div className="w-full h-[300px] md:h-[400px] bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-white/5"></div>

      {/* 2. Lower Carousel Skeleton (Shows 3 cards mimicking the desktop view) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {[1, 2, 3].map((item) => (
          <div key={item} className="relative h-48 md:h-56 rounded-xl bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-white/5">
            
            {/* Date Badge Skeleton (Top Right) */}
            <div className="absolute top-3 right-3 w-20 h-5 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            
            {/* Title Text Skeletons (Bottom Left) */}
            <div className="absolute bottom-4 left-4 w-[85%] space-y-2">
              <div className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SkeletonCard;