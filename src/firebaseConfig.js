// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWixyUhYV3SNEWCvoQd5jKE5-jkFfs38w",
  authDomain: "blog-5a94b.firebaseapp.com",
  projectId: "blog-5a94b",
  storageBucket: "blog-5a94b.appspot.com",
  messagingSenderId: "694407491946",
  appId: "1:694407491946:web:57b36a206a1259c7d67513"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

