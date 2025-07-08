// src/pages/MoviePage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"; // E'tibor bering: bu to'g'ri yo'l bo'lishi kerak

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "filmlar", id); // "filmlar" bu sizning collection nomingiz
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMovie({ id: docSnap.id, ...docSnap.data() });
        } else {
          throw new Error("Film topilmadi");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div className="text-white p-8">Yuklanmoqda...</div>;
  if (error || !movie)
    return <div className="text-red-500 p-8">{error || "Film topilmadi"}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
