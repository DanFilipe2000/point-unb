// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt7Bl8cAReMC3izfM8uPqIGgtDKhcTqFU",
  authDomain: "point-unb.firebaseapp.com",
  projectId: "point-unb",
  storageBucket: "point-unb.appspot.com",
  messagingSenderId: "506808971090",
  appId: "1:506808971090:web:9c161db3cf4bc07a87d48b",
  measurementId: "G-Q1XZ05SGEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);