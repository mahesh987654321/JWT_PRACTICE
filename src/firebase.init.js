// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUKOEanLZ4OpzjX__JaulM1HnLSWRC08Y",
  authDomain: "jwt-projet.firebaseapp.com",
  projectId: "jwt-projet",
  storageBucket: "jwt-projet.appspot.com",
  messagingSenderId: "634420790123",
  appId: "1:634420790123:web:1fe9b94f68009d5ed1822e",
  measurementId: "G-DX1D4HY65L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
