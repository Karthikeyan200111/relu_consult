import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from "notistack";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      enqueueSnackbar("Login Successful", { variant: "success" });
      navigate('/'); // Redirect to a dashboard or home page
    } catch (error) {
      console.error('Error logging in:', error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <h2 className='font-bold text-2xl text-white text-center uppercase'>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" className='rounded-md'>LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
