// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQLlWqNceFb5iJUnFDUROz1wc8iuupgZg",
  authDomain: "netflixgpt-e089e.firebaseapp.com",
  projectId: "netflixgpt-e089e",
  storageBucket: "netflixgpt-e089e.appspot.com",
  messagingSenderId: "1088926755745",
  appId: "1:1088926755745:web:7ab6e4e0ba03e44df479e0",
  measurementId: "G-4RMMVTJZMS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();