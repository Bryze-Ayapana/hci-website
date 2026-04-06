import React from 'react';

const SkeletonCard = () => {
  return (
    // animate-pulse creates the breathing loading effect
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse border border-gray-200 dark:border-gray-700">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700 w-full"></div>
      
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title Lines */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        
        {/* Description Lines */}
        <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        
        {/* Button Skeleton */}
        <div className="mt-6 h-10 bg-gray-300 dark:bg-gray-700 rounded-md w-32"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;