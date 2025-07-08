// src/components/MovieCarousel.jsx
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import { useCollectionsData } from "../hooks/useCollectionsData";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const MovieCarousel = () => {
  const { data, isPending, error } = useCollectionsData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, data]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!data?.films?.length) return;
    setCurrentIndex((prev) =>
      prev + itemsPerView >= data.films.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!data?.films?.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, data.films.length - itemsPerView) : prev - 1
    );
  };

  if (error) return <p className="text-red-500 px-4">Xatolik: {error}</p>;

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Tavsiya etiladigan filmlar</h2>
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 border border-gray-600 text-white hover:bg-gray-800 rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-gray-600 text-white hover:bg-gray-800 rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isPending ? "flex-wrap" : ""
            }`}
            style={{
              transform: isPending
                ? "none"
                : `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: isPending
                ? "100%"
                : `${(data?.films.length * 100) / itemsPerView}%`,
            }}
          >
            {isPending
              ? Array.from({ length: itemsPerView }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : data?.films.map((movie) => (
                  <div
                    key={movie.id}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                  >
                    <Link to={`/movies/${movie.id}`}>
                      <div className="bg-gray-800 rounded-lg overflow-hidden transition-shadow duration-300 cursor-pointer group hover:shadow-lg hover:shadow-white/30">
                        <div className="relative">
                          <img
                            src={movie.poster || "/placeholder.svg"}
                            alt={movie.title}
                            className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="bg-red-600 hover:bg-red-700 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded flex items-center">
                              <Play className="w-4 h-4 mr-1" />
                              Tomosha
                            </button>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 md:p-4">
                          <h3 className="font-semibold text-base sm:text-lg mb-1 truncate">
                            {movie.title}
                          </h3>
                          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-1">
                            <span>{movie.date}</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {movie.genre}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCarousel;
