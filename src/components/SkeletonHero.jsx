// src/components/SkeletonHero.jsx
import React from "react";

const SkeletonHero = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-end text-white bg-gray-800 animate-pulse">
      {/* Background shimmer gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

      {/* Content shimmer */}
      <div className="relative container mx-auto px-4 pb-6 z-10">
        <div className="max-w-2xl space-y-4">
          <div className="h-8 sm:h-12 md:h-16 w-3/4 bg-gray-700 rounded" />
          <div className="h-4 sm:h-5 md:h-6 w-full bg-gray-600 rounded" />
          <div className="h-4 sm:h-5 md:h-6 w-5/6 bg-gray-600 rounded" />

          {/* Buttons shimmer */}
          <div className="flex gap-4 mt-4">
            <div className="h-10 sm:h-12 w-36 bg-gray-700 rounded" />
            <div className="h-10 sm:h-12 w-40 bg-gray-700 rounded" />
          </div>

          {/* Metadata shimmer */}
          <div className="flex space-x-4 mt-4">
            <div className="h-3 w-20 bg-gray-600 rounded" />
            <div className="h-3 w-16 bg-gray-600 rounded" />
            <div className="h-3 w-24 bg-gray-600 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonHero;
