// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_apiKey);
const firebaseConfig = {
  apiKey: "AIzaSyDea44wdbo5cBEQBpGHTzuuuuI7magm1DE",
  authDomain: "search-craft.firebaseapp.com",
  projectId: "search-craft",
  storageBucket: "search-craft.appspot.com",
  messagingSenderId: "71178896",
  appId: "1:71178896:web:44fdd91a5bdaa454441615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;