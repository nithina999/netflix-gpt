// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKRauKP3f5_S8BjiWb8K_UAdc71PNjaN8",
  authDomain: "netflix-gpt-43712.firebaseapp.com",
  projectId: "netflix-gpt-43712",
  storageBucket: "netflix-gpt-43712.appspot.com",
  messagingSenderId: "1025190732609",
  appId: "1:1025190732609:web:d13813c34b677bee7d77c0",
  measurementId: "G-15ZTJ6D10X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
