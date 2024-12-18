// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUi7QnbNa5AvAx2-Fy9Zxq43KI0RXD-i8",
  authDomain: "react-node-firebase-stripe.firebaseapp.com",
  projectId: "react-node-firebase-stripe",
  storageBucket: "react-node-firebase-stripe.firebasestorage.app",
  messagingSenderId: "805484815398",
  appId: "1:805484815398:web:db6005b5697546afce32e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
