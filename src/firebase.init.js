// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqfS-jEW9UpCrEjTz7iOVLq8f5smINlo",
  authDomain: "refugee-accomodation.firebaseapp.com",
  projectId: "refugee-accomodation",
  storageBucket: "refugee-accomodation.appspot.com",
  messagingSenderId: "937837134096",
  appId: "1:937837134096:web:236957113a267d2d35e595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;