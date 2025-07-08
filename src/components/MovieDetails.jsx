// src/components/MovieDetails.jsx
import React from "react";

export default function MovieDetails({ movie }) {
  const youtubeEmbedUrl = movie.filmUrl?.includes("youtube.com/watch")
    ? movie.filmUrl.replace("watch?v=", "embed/")
    : movie.filmUrl;

  return (
    <div className="relative text-white">
      {/* Hero Poster */}
      <div
        className="h-[60vh] sm:h-[70vh] w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${movie.poster || "/placeholder.svg"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Info Box */}
      <div className="max-w-5xl mx-auto px-4 py-10 relative z-10 -mt-20 sm:-mt-28 bg-gray-900/80 rounded-lg shadow-lg backdrop-blur">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Thumbnail */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-1/3 rounded shadow-lg object-cover hidden md:block"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400 mb-4">{movie.description}</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><strong>Yili:</strong> {movie.date}</li>
              <li><strong>Davomiyligi:</strong> {`${movie.runtime / 60 | 0} soat ${movie.runtime % 60} minut`}</li>
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

        {/* 🎬 Video iframe */}
        {youtubeEmbedUrl && (
          <div className="mt-8 aspect-video w-full">
            <iframe
  className="w-full h-full rounded-lg shadow-lg"
  src={youtubeEmbedUrl}
  title={`${movie.title} video`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
/>

          </div>
        )}
      </div>
    </div>
  );
}
