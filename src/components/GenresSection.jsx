import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

const genres = [
  { id: 1, name: "Harakat", slug: "jangari", color: "bg-red-600 hover:bg-red-700" },
  { id: 2, name: "Komediya", slug: "komediya", color: "bg-yellow-600 hover:bg-yellow-700" },
  { id: 3, name: "Drama", slug: "drama", color: "bg-blue-600 hover:bg-blue-700" },
  { id: 4, name: "Fantastika", slug: "fantastika", color: "bg-purple-600 hover:bg-purple-700" },
  { id: 5, name: "Qo'rqinchli", slug: "ujas", color: "bg-gray-800 hover:bg-gray-900" },
  { id: 6, name: "Romantik", slug: "romantik", color: "bg-pink-600 hover:bg-pink-700" },
  { id: 7, name: "Sarguzasht", slug: "sarguzasht", color: "bg-green-600 hover:bg-green-700" },
  { id: 8, name: "Animatsiya", slug: "animatsiya", color: "bg-orange-600 hover:bg-orange-700" },
  { id: 9, name: "Jinoyat", slug: "kriminal", color: "bg-indigo-600 hover:bg-indigo-700" },
  { id: 10, name: "Dokumentar", slug: "hujjatli film", color: "bg-teal-600 hover:bg-teal-700" },
  { id: 11, name: "Oilaviy", slug: "oilaviy", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: 12, name: "Tarixiy", slug: "tarixiy", color: "bg-amber-600 hover:bg-amber-700" },
];

const GenresSection = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Janrlar bo'yicha tanlang</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {genres.map(({ id, name, slug, color }) => (
            <Link
              key={id}
              to={`/genres/${slug}`}
              className={`${color} rounded-full px-6 py-3 text-center font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/genres" className="inline-flex items-center text-red-400 hover:text-red-300 font-medium">
            Barcha janrlarni ko'rish
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenresSection;
