// src/components/AboutCTA.jsx
import React from "react";
import { Play, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button"; // Button komponentingiz shu joyda bo'lishi kerak

const AboutCTA = () => {
  return (
     <section className="py-20 bg-gradient-to-r from-red-900/30 via-gray-900 to-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className="bg-red-600/20 p-3 rounded-full">
                <Play className="w-8 h-8 text-red-400" />
              </div>
              <div className="bg-yellow-600/20 p-3 rounded-full">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="bg-blue-600/20 p-3 rounded-full">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Kino olamiga <span className="text-red-400">xush kelibsiz!</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Minglab filmlar, seriallar va ekskluziv kontent sizni kutmoqda. Bugun KinoSayt oilasiga qo'shiling va eng
            yaxshi kino tajribasini boshdan kechiring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Play className="w-6 h-6 mr-2" />
                Hoziroq boshlash
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
              >
                Filmlarni ko'rish
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-400">Bizning missiyamiz</h3>
              <p className="text-gray-400 text-sm">
                O'zbekiston va dunyo kinematografiyasini har bir uyga yetkazish, madaniy boyliklarni saqlash va
                rivojlantirish.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Bizning vazifamiz</h3>
              <p className="text-gray-400 text-sm">
                Markaziy Osiyodagi eng yirik va ishonchli raqamli kino platformasi bo'lish, innovatsion yechimlar taklif
                etish.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">Bizning qadriyatlarimiz</h3>
              <p className="text-gray-400 text-sm">
                Sifat, ishonch, innovatsiya va foydalanuvchilarning ehtiyojlarini birinchi o'ringa qo'yish bizning
                asosiy tamoyillarimiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
