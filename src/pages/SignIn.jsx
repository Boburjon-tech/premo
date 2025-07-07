import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"; 
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Tizimga kirildi: ${userCredential.user.email}`);
      navigate("/"); 
    } catch (error) {
      setMessage(`Xatolik: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Tizimga kirish</h2>
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
        <button type="submit">Kirish</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default SignIn;
