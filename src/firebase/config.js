// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-4cGedvGRea572QsKZwCmuBaL3V2W-0",
  authDomain: "lf-systems.firebaseapp.com",
  projectId: "lf-systems",
  storageBucket: "lf-systems.appspot.com",
  messagingSenderId: "806035283304",
  appId: "1:806035283304:web:8d15901da6498105020add",
  measurementId: "G-8CWBV6JGP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

