// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC4SU99AsCy1CvSa2-Ab0LqPoh9MgBis8",
  authDomain: "netflix-90350.firebaseapp.com",
  projectId: "netflix-90350",
  storageBucket: "netflix-90350.firebasestorage.app",
  messagingSenderId: "778488187535",
  appId: "1:778488187535:web:6766a7caf60a0bf43cbefa",
  measurementId: "G-Z0LPEYHN3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
