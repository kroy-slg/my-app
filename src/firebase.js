import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tsr-technologies.firebaseapp.com",
    databaseURL: "https://tsr-technologies-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tsr-technologies",
    storageBucket: "tsr-technologies.appspot.com",
    messagingSenderId: "872772724806",
    appId: "1:872772724806:web:26e7b0191aafaaeca38247",
    measurementId: "G-H01FGE4WSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

// ✅ Initialize Firestore
export const db = getFirestore(app);
export { app, analytics };
