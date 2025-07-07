import React from "react";
import { useParams } from "react-router-dom";
import { useCollectionsData } from "../hooks/useCollectionsData";

const genres = [
  { id: 1, name: "Harakat", slug: "jangari" },
  { id: 2, name: "Komediya", slug: "komediya" },
  { id: 3, name: "Drama", slug: "drama" },
  { id: 4, name: "Fantastika", slug: "fantastika" },
  { id: 5, name: "Qo'rqinchli", slug: "ujas" },
  { id: 6, name: "Romantik", slug: "romantik" },
  { id: 7, name: "Sarguzasht", slug: "sarguzasht" },
  { id: 8, name: "Animatsiya", slug: "animatsiya" },
  { id: 9, name: "Jinoyat", slug: "kriminal" },
  { id: 10, name: "Dokumentar", slug: "hujjatli film" },
  { id: 11, name: "Oilaviy", slug: "oilaviy" },
  { id: 12, name: "Tarixiy", slug: "tarixiy" },
];

const ChoosedGenre = () => {
  const { genre: genreSlug } = useParams(); // URLdan slugni olamiz
  const { data, isPending, error } = useCollectionsData();

  // URL slug asosida janr nomini topamiz
  const genreObj = genres.find((g) => g.slug === genreSlug);
  const genreName = genreObj?.name || genreSlug; // agar topilmasa slugni o'zi ko'rsin

  // filmni filter qilish: movie.genre va genreName ikkalasi ham kichik harflarga o'giriladi
  const filteredMovies = data?.films?.filter((movie) =>
    movie.genre?.toLowerCase().includes(genreName.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          "{genreName}" janridagi filmlar
        </h2>

        {isPending && <p className="text-center">Yuklanmoqda...</p>}
        {error && <p className="text-red-500 text-center">Xatolik: {error}</p>}
        {!filteredMovies?.length && !isPending && (
          <p className="text-center">Bu janrda hech qanday film topilmadi.</p>
        )}

        {filteredMovies && filteredMovies.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                  <p className="text-sm text-gray-500">{movie.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChoosedGenre;
