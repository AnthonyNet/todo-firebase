// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIhQNGJZLRuUl1_j1QhJpc3bx7s_Sid7w",
  authDomain: "todo-app-yt-d783a.firebaseapp.com",
  projectId: "todo-app-yt-d783a",
  storageBucket: "todo-app-yt-d783a.appspot.com",
  messagingSenderId: "1036908315193",
  appId: "1:1036908315193:web:42f8aa9cd69507b2b883e8",
  measurementId: "G-XPJ7NVLCX9"
};




// Import Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)