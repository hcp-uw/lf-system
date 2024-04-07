import { initializeApp } from "firebase/app"
import { getAuth, initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCk-4cGedvGRea572QsKZwCmuBaL3V2W-0",
  authDomain: "lf-systems.firebaseapp.com",
  projectId: "lf-systems",
  storageBucket: "lf-systems.appspot.com",
  messagingSenderId: "806035283304",
  appId: "1:806035283304:web:8d15901da6498105020add",
  measurementId: "G-8CWBV6JGP9",
  databaseURL: "https://lf-systems-default-rtdb.firebaseio.com"
};
    
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

