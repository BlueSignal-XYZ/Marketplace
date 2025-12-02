// Firebase configuration for BlueSignal Cloud
// This config is used exclusively by Cloud authentication components

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Cloud-specific Firebase configuration
// NOTE: Currently using same project as WQT. For production, replace with dedicated Cloud project.
const firebaseCloudConfig = {
  apiKey: import.meta.env.VITE_CLOUD_FIREBASE_API_KEY || "AIzaSyAESUVCltG4kviQLIiiygIROJ7BKMMgvX8",
  authDomain: import.meta.env.VITE_CLOUD_FIREBASE_AUTH_DOMAIN || "waterquality-trading.firebaseapp.com",
  projectId: import.meta.env.VITE_CLOUD_FIREBASE_PROJECT_ID || "waterquality-trading",
  storageBucket: import.meta.env.VITE_CLOUD_FIREBASE_STORAGE_BUCKET || "waterquality-trading.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_CLOUD_FIREBASE_MESSAGING_SENDER_ID || "1006831487182",
  appId: import.meta.env.VITE_CLOUD_FIREBASE_APP_ID || "1:1006831487182:web:a58405168a345d8728689f",
  measurementId: import.meta.env.VITE_CLOUD_FIREBASE_MEASUREMENT_ID || "G-ECMFLV2Y6B"
};

// Initialize Firebase for Cloud
const cloudApp = initializeApp(firebaseCloudConfig, "cloud");
const cloudDb = getDatabase(cloudApp);
const cloudAuth = getAuth(cloudApp);

// Set persistence to LOCAL to keep user signed in across browser sessions
setPersistence(cloudAuth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set auth persistence:", error);
});

// Configure Google Auth Provider with proper settings
const cloudGoogleProvider = new GoogleAuthProvider();
cloudGoogleProvider.addScope('email');
cloudGoogleProvider.addScope('profile');
cloudGoogleProvider.setCustomParameters({
  prompt: 'select_account' // Always show account selection
});

export { cloudAuth as auth, cloudDb as db, cloudGoogleProvider as googleProvider };
