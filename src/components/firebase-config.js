// Copied from https://console.firebase.google.com
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlbDP-jMtVDSHxPV2V8eWAQUQb6mQUcX0",
  authDomain: "about-me-github.firebaseapp.com",
  projectId: "about-me-github",
  storageBucket: "about-me-github.appspot.com",
  messagingSenderId: "334585507036",
  appId: "1:334585507036:web:bb84d28ae66d08c7ec1819",
  measurementId: "G-SFF5P6W75K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
