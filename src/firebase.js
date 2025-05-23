// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLT_Yqv_ohls5aH--W-m3iUG5Mbwzci2s",
  authDomain: "nsia-b40c4.firebaseapp.com",
  projectId: "nsia-b40c4",
  storageBucket: "nsia-b40c4.firebasestorage.app",
  messagingSenderId: "368931031983",
  appId: "1:368931031983:web:d4d9a5e03867baf47bfd5a",
  measurementId: "G-PC8Q6FMV53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
