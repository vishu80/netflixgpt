// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlsZQyU1shxSfFbjP0WMEVVYyNZfiswjA",
  authDomain: "netflixgpt-bd3fb.firebaseapp.com",
  projectId: "netflixgpt-bd3fb",
  storageBucket: "netflixgpt-bd3fb.firebasestorage.app",
  messagingSenderId: "275345440668",
  appId: "1:275345440668:web:cd2c49872e2bd84c5c1259",
  measurementId: "G-37MM5ZT0KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
