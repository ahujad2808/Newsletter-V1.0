// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBblwqu5Nz4_FVQs2zRG31X1mG-7jUYvgE",
  authDomain: "sigin-practice.firebaseapp.com",
  projectId: "sigin-practice",
  storageBucket: "sigin-practice.appspot.com",
  messagingSenderId: "594682718094",
  appId: "1:594682718094:web:529178a9d36bb35cfb26df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);