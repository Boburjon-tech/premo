// src/components/MovieCarousel.jsx
import React, { useEffect, useState, useRef } from "react";
import { Star, Play } from "lucide-react";
import { useCollectionsData } from "../hooks/useCollectionsData";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const MovieCarousel = () => {
  const { data, isPending, error } = useCollectionsData();
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Ekran o'lchamiga qarab elementlar sonini aniqlash
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

  // Cheksiz silliq animatsiya
  useEffect(() => {
    if (!data || !data.films || data.films.length === 0) return;

    const totalItems = data.films.length * 2;
    const totalWidthPercent = (totalItems * 100) / itemsPerView;
    const speed = 0.1;

    const step = () => {
      positionRef.current += speed;

      if (positionRef.current >= totalWidthPercent / 2) {
        positionRef.current = 0;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${positionRef.current}%)`;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationRef.current);
  }, [data, itemsPerView]);

  if (error) {
    return <p className="text-red-500 px-4">Xatolik: {error}</p>;
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Tavsiya etiladigan filmlar</h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex"
            style={{
              width: isPending
                ? "100%"
                : `${(data.films.length * 2 * 100) / itemsPerView}%`,
              transition: "none",
            }}
          >
            {(isPending
              ? Array.from({ length: itemsPerView })
              : [...data.films, ...data.films]
            ).map((movie, index) => (
              <div
                key={`${movie?.id || "skeleton"}-${index}`}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                {isPending ? (
                  <SkeletonCard />
                ) : (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCarousel;
