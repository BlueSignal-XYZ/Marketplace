import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAESUVCltG4kviQLIiiygIROJ7BKMMgvX8",
  authDomain: "waterquality-trading.firebaseapp.com",
  projectId: "waterquality-trading",
  storageBucket: "waterquality-trading.firebasestorage.app",
  messagingSenderId: "1006831487182",
  appId: "1:1006831487182:web:a58405168a345d8728689f",
  measurementId: "G-ECMFLV2Y6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Initialize Firebase Auth
const auth = getAuth();

export { auth, db };