// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ ADD THIS IMPORT

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tsr-technologies.firebaseapp.com",
    databaseURL: "https://tsr-technologies-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tsr-technologies",
    storageBucket: "tsr-technologies.firebasestorage.app",
    messagingSenderId: "872772724806",
    appId: "1:872772724806:web:26e7b0191aafaaeca38247",
    measurementId: "G-H01FGE4WSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics (will work only in browser)
const analytics = getAnalytics(app);

// ✅ Initialize Firestore
export const db = getFirestore(app);
