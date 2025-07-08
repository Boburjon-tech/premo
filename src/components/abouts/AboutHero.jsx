// src/components/AboutHero.jsx
import React from "react";
import { Play, Users, Star, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-purple-900/20"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-red-600 p-4 rounded-full">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            Premo
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            O'zbekistonning eng yirik onlayn kino platformasi
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Biz 2020-yildan beri O'zbekiston va dunyo kinematografiyasining eng yaxshi namunalarini sizlarga yetkazib
            beramiz. Minglab filmlar, seriallar va ekskluziv kontent bilan kino sevuvchilarning sevimli platformasiga
            aylandik.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-gray-800/50 rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-sm font-medium">1M+ foydalanuvchi</span>
            </div>
            <div className="flex items-center bg-gray-800/50 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">50,000+ filmlar</span>
            </div>
            <div className="flex items-center bg-gray-800/50 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm font-medium">100+ mamlakat</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Filmlarni ko'rish
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 bg-transparent"
              >
                Qidiruv
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
