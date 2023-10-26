// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQE0aidUzeqGcajkThv6D2-hl4iM8q4s",
  authDomain: "corgiland-aa961.firebaseapp.com",
  projectId: "corgiland-aa961",
  storageBucket: "corgiland-aa961.appspot.com",
  messagingSenderId: "1071449471388",
  appId: "1:1071449471388:web:e1230817d4bd5ce7e3f059",
  measurementId: "G-6KD6N14LMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };
