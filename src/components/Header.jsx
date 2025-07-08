import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, LogOut } from "lucide-react";
import { useAuth } from "../context/authContext"; // 🔑 Auth contextni chaqiramiz

const Header = () => {
  const { currentUser, logout } = useAuth(); // 🔐 Authdan user va logoutni olamiz
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Logoutdan keyin login sahifasiga yo‘naltirish
    } catch (error) {
      console.error("Chiqishda xatolik:", error);
    }
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl flex items-center gap-1 font-bold text-red-500">
            <img width="22" height="20" src="https://img.icons8.com/ios-glyphs/30/fb2c36/play--v1.png" alt="play--v1" />
            Premo
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-white">
            <Link to="/" className="hover:text-red-400 transition-colors">
              Bosh sahifa
            </Link>
            <Link to="/movies" className="hover:text-red-400 transition-colors">
              Filmlar
            </Link>
            <Link to="/series" className="hover:text-red-400 transition-colors">
              Seriallar
            </Link>
            <Link to="/genres" className="hover:text-red-400 transition-colors">
              Janrlar
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white">
              <Search className="w-5 h-5" />
            </button>

            {currentUser && (
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white flex items-center gap-1"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Chiqish</span>
              </button>
            )}

            <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
