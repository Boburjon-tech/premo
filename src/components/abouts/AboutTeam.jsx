// src/components/AboutTeam.jsx
import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Aziz Karimov",
    role: "Bosh direktor va asoschisi",
    image: "/placeholder.svg?height=300&width=300",
    bio: "10 yillik IT tajribasi bilan kino industriyasini raqamlashtirish sohasida faoliyat yuritadi",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aziz@kinosayt.uz",
    },
  },
  {
    name: "Malika Tosheva",
    role: "Kontent direktori",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Kinematografiya mutaxassisi, 15 yillik tajriba bilan eng yaxshi filmlarni tanlaydi",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "malika@kinosayt.uz",
    },
  },
  {
    name: "Bobur Rahimov",
    role: "Texnik direktor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Platformaning texnik tomonini boshqaradi va foydalanuvchi tajribasini yaxshilaydi",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "bobur@kinosayt.uz",
    },
  },
  {
    name: "Nigora Sultanova",
    role: "Marketing direktori",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Brendni rivojlantirish va foydalanuvchilar bilan muloqot o'rnatish bo'yicha mutaxassis",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nigora@kinosayt.uz",
    },
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Bizning jamoa</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4 text-gray-400">
                  <a href={member.social.linkedin} aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:text-blue-500 transition-colors" />
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors" />
                  </a>
                  <a href={`mailto:${member.social.email}`} aria-label="Email">
                    <Mail className="w-5 h-5 hover:text-red-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
