import React, { useState } from "react";
import { auth, provider } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Muvaffaqiyatli ro'yxatdan o'tildi: ${userCredential.user.email}`);
      navigate("/");
    } catch (error) {
      setMessage(`Xatolik: ${error.message}`);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage(`Google orqali tizimga kirildi: ${result.user.email}`);
      navigate("/");
    } catch (error) {
      setMessage(`Google bilan xatolik: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Ro'yxatdan o'tish</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ro'yxatdan o'tish</button>

        <hr />

        <button type="button" onClick={handleGoogleRegister}>
          Google bilan ro'yxatdan o'tish
        </button>

        <p>{message}</p>
      </form>
    </div>
  );
};

export default SignUp;
