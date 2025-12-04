// Firebase configuration for BlueSignal Cloud
// This config is used exclusively by Cloud authentication components

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Cloud-specific Firebase configuration
// NOTE: Currently using same project as WQT. For production, replace with dedicated Cloud project.
// IMPORTANT: authDomain must match the hosting domain for OAuth to work correctly.
// Using cloud.bluesignal.xyz ensures the auth handler stays on the same origin,
// avoiding cross-origin popup/redirect issues with Google OAuth.
const firebaseCloudConfig = {
  apiKey: import.meta.env.VITE_CLOUD_FIREBASE_API_KEY || "AIzaSyAESUVCltG4kviQLIiiygIROJ7BKMMgvX8",
  authDomain: import.meta.env.VITE_CLOUD_FIREBASE_AUTH_DOMAIN || "cloud.bluesignal.xyz",
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
const cloudGoogleProvider = new GoogleAuthProvider();

export { cloudAuth as auth, cloudDb as db, cloudGoogleProvider as googleProvider };
