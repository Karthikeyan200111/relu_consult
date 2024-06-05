// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixjnucKbnn9QMEbXxCthI319gKHOYALg",
  authDomain: "login-d29ec.firebaseapp.com",
  projectId: "login-d29ec",
  storageBucket: "login-d29ec.appspot.com",
  messagingSenderId: "425883841574",
  appId: "1:425883841574:web:fa0bd96f52985d860022e7",
  measurementId: "G-8YDFMFTZ25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
