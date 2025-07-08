// src/components/SkeletonCard.jsx
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 animate-pulse">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow">
        <div className="h-48 sm:h-56 md:h-60 lg:h-64 bg-gray-700"></div>
        <div className="p-4 space-y-2">
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          <div className="h-3 bg-gray-600 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
