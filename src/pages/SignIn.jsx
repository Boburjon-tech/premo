import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast(`Tizimga kirildi: ${userCredential.user.email}`);
      navigate("/");
    } catch (error) {
      toast(`Xatolik: Email yoki parol noto'g'ri.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Tizimga kirish</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-200"
          >
            Kirish
          </button>
        </form>
        {message && (
          <p className="text-center text-sm text-red-400">{message}</p>
        )}

        {/* Yangi yozuv */}
        <p className="text-center text-sm text-gray-400">
          Agar sizda akkaunt bo'lmasa,{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            ro'yhatdan o'ting
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
