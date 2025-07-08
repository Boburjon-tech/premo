// src/components/AboutStats.jsx
import React, { useEffect, useState } from "react";
import { TrendingUp, Users, Play, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 1200000,
    label: "Faol foydalanuvchi",
    suffix: "+",
    color: "text-blue-400",
  },
  {
    icon: Play,
    number: 75000,
    label: "Filmlar va seriallar",
    suffix: "+",
    color: "text-red-400",
  },
  {
    icon: TrendingUp,
    number: 50000000,
    label: "Oylik tomosha",
    suffix: "+",
    color: "text-green-400",
  },
  {
    icon: Award,
    number: 150,
    label: "Mamlakat va mintaqa",
    suffix: "+",
    color: "text-yellow-400",
  },
];

function AnimatedNumber({ target, duration = 2000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev + increment >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + increment;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{Math.floor(current).toLocaleString()}</span>;
}

export default function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-700 via-red-900/10 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-700">Bizning</span>   <span className="text-red-400">yutuqlarimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Raqamlar orqali KinoSayt platformasining muvaffaqiyati va foydalanuvchilar ishonchi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-12 h-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                <AnimatedNumber target={stat.number} />
                <span className={stat.color}>{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">O'zbekistondagi №1 kino platformasi</h3>
            <p className="text-gray-300 leading-relaxed">
              2025-yildan buyon biz O'zbekiston kino industriyasining rivojlanishiga hissa qo'shib kelmoqdamiz. Mahalliy
              va xalqaro filmlarni yuqori sifatda taqdim etish, yoshlarni kinematografiyaga qiziqtirish va madaniy
              boyliklarni saqlash bizning asosiy maqsadlarimizdir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
