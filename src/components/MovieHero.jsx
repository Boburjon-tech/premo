import React, { useState, useEffect } from "react";
import { Play, Plus } from "lucide-react";
import { useCollectionsData } from "../hooks/useCollectionsData";
import SkeletonHero from "./SkeletonHero";

const MovieHero = () => {
  const { data, isPending, error } = useCollectionsData();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.films?.length) {
        setCurrentIndex((prev) => (prev + 1) % data.films.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (isPending) return <SkeletonHero />;
  if (error) return <p className="text-red-500 px-4">Xatolik: {error}</p>;
  if (!data?.films?.length) return <p className="text-white px-4">Film topilmadi.</p>;

  const movie = data.films[currentIndex];

  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-end text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${movie.poster || "/placeholder.svg"})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-6 z-10">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
            {movie.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            {movie.description || "Bu film uchun tavsif mavjud emas."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-medium rounded flex items-center">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Tomosha qilish
            </button>
            <button className="border border-gray-600 text-white hover:bg-gray-800 px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-medium rounded flex items-center bg-transparent">
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ro'yxatga qo'shish
            </button>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center space-x-2 sm:space-x-6 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
            <span>
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)} soat ${movie.runtime % 60} minut`
                : "Davomiyligi yo'q"}
            </span>
            <span>•</span>
            <span>{movie.date || "Sana yo'q"}</span>
            <span>•</span>
            <span>IMDB {movie.rating || "Noma'lum"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
