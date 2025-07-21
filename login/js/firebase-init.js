// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE-9z0842R8lqK03p78whrxHU79RY4oOg",
  authDomain: "emyle-store.firebaseapp.com",
  projectId: "emyle-store",
  storageBucket: "emyle-store.firebasestorage.app",
  messagingSenderId: "357275217663",
  appId: "1:357275217663:web:8fcd056d24f9efab05a6ca",
  measurementId: "G-JMEBN4X3W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
