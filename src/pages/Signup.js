import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from "notistack";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        phoneNumber: phone
      });
      console.log('User signed up:', userCredential.user);
      enqueueSnackbar("SignUp Successful", { variant: "success" });
      navigate('/login');
    } catch (error) {
      console.log('Error signing up:', error.message);
      if(error.message==='Firebase: Error (auth/email-already-in-use).'){
        enqueueSnackbar("Email Id Already registered", { variant: "error" });
      }else{
        enqueueSnackbar("Error Occured", { variant: "error" });
      }
      
    }
  };

  return (
    <div>
      <h2 className='font-bold text-2xl text-white text-center uppercase'>SIGN UP</h2>
      <form onSubmit={handleSignup}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" className='rounded-md'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
