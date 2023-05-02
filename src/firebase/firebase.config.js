// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv-6zLXju5NEwQCvFjbYswowDn8ID2gU4",
  authDomain: "the-news-dragon-de07f.firebaseapp.com",
  projectId: "the-news-dragon-de07f",
  storageBucket: "the-news-dragon-de07f.appspot.com",
  messagingSenderId: "252851734474",
  appId: "1:252851734474:web:3a5440f3cf9eed02c8b133",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app