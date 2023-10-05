// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-68fa8.firebaseapp.com",
  projectId: "mern-estate-68fa8",
  storageBucket: "mern-estate-68fa8.appspot.com",
  messagingSenderId: "838398243826",
  appId: "1:838398243826:web:2361d6e8b8ab6e8256f16b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);