// src/components/MovieDetails.jsx
import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <div className="relative text-white">
      {/* Hero-style Poster */}
      <div
        className="h-[60vh] sm:h-[70vh] w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${movie.poster || "/placeholder.svg"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Movie Info */}
      <div className="max-w-5xl mx-auto px-4 py-10 relative z-10 -mt-20 sm:-mt-28 bg-gray-900/80 rounded-lg shadow-lg backdrop-blur">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Optional Poster Thumbnail */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-1/3 rounded shadow-lg object-cover hidden md:block"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400 mb-4">{movie.description}</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><strong>Yili:</strong> {movie.date}</li>
              <li><strong>Davomiyligi:</strong> {movie.duration}</li>
              <li>
                <strong>Janr:</strong>{" "}
                {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
              </li>
              <li><strong>Rejissyor:</strong> {movie.director}</li>
              <li>
                <strong>Rollar:</strong>{" "}
                {Array.isArray(movie.cast) ? movie.cast.join(", ") : movie.cast}
              </li>
              <li><strong>IMDB:</strong> {movie.imdbRating}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
