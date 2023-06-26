import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO11ubRTi9BYHkJiIlUKQCwq8Q7KtdWY4",
  authDomain: "react2-b470a.firebaseapp.com",
  projectId: "react2-b470a",
  storageBucket: "react2-b470a.appspot.com",
  messagingSenderId: "1020553318369",
  appId: "1:1020553318369:web:fafbbf561a85a273fe0ca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
