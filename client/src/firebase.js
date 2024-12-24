// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkOLBWrYUmGBUXx3qmYrC5AEEsU3u-taM",
  authDomain: "yahya-sblog.firebaseapp.com",
  projectId: "yahya-sblog",
  storageBucket: "yahya-sblog.firebasestorage.app",
  messagingSenderId: "476375536539",
  appId: "1:476375536539:web:2b54b41744232474a2c73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };