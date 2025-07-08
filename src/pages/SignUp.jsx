import React, { useState } from "react";
import { auth, provider } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast(`Muvaffaqiyatli ro'yxatdan o'tildi: ${userCredential.user.email}`);
      navigate("/");
    } catch (error) {
      toast(`Xatolik: ${error.message}`);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast(`Google orqali tizimga kirildi: ${result.user.email}`);
      navigate("/");
    } catch (error) {
      toast(`Google bilan xatolik: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Ro'yxatdan o'tish</h2>
        <form onSubmit={handleRegister} className="space-y-4">
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
            Ro'yxatdan o'tish
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-400">
            <span className="bg-gray-800 px-2">yoki</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold py-3 rounded hover:bg-gray-200 transition duration-200"
        >
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/fb2c36/google-logo.png" alt="google-logo"/>
          Google bilan ro'yxatdan o'tish
        </button>

        {message && (
          <p className="text-center text-sm text-red-400">{message}</p>
        )}

        <p className="text-center text-sm text-gray-400">
          Akkauntingiz bormi?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Tizimga kiring
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
