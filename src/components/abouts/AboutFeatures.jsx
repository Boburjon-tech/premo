import React from "react";
import { Play, Download, Shield, Smartphone, Clock, Heart, Star, Users, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Yuqori sifatli video",
    description: "4K Ultra HD va HDR formatida eng yaxshi ko'rish tajribasi",
    color: "text-red-400",
  },
  {
    icon: Download,
    title: "Oflayn tomosha",
    description: "Filmlarni yuklab oling va internetisiz tomosha qiling",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Xavfsiz platform",
    description: "Ma'lumotlaringiz himoyalangan va xavfsiz muhitda saqlangan",
    color: "text-green-400",
  },
  {
    icon: Smartphone,
    title: "Barcha qurilmalarda",
    description: "Telefon, planshet, kompyuter va Smart TV'da ishlaydi",
    color: "text-purple-400",
  },
  {
    icon: Clock,
    title: "24/7 mavjudlik",
    description: "Istalgan vaqtda, istalgan joydan filmlarni tomosha qiling",
    color: "text-yellow-400",
  },
  {
    icon: Heart,
    title: "Sevimlilar ro'yxati",
    description: "O'zingizga yoqqan filmlarni saqlang va keyinroq tomosha qiling",
    color: "text-pink-400",
  },
  {
    icon: Star,
    title: "Shaxsiy tavsiyalar",
    description: "AI yordamida sizga mos filmlar tavsiya etiladi",
    color: "text-orange-400",
  },
  {
    icon: Users,
    title: "Oilaviy nazorat",
    description: "Bolalar uchun xavfsiz kontent va yoshga mos filtrlash",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Tez yuklash",
    description: "Eng tez serverlar orqali filmlar bir zumda yuklanadi",
    color: "text-indigo-400",
  },
  {
    icon: Globe,
    title: "Ko'p tillar",
    description: "O'zbek, rus, ingliz va boshqa tillarda subtitrlar",
    color: "text-teal-400",
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nega aynan <span className="text-red-400">KinoSayt</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bizning platformamiz sizga eng yaxshi kino tajribasini taqdim etish uchun zamonaviy texnologiyalar va
            foydalanuvchi ehtiyojlarini birlashtirib yaratilgan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
