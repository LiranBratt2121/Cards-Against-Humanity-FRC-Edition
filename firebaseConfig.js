// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKO4Pcdwhkt0IBnXg1T-VrBP3n-ahGSQc",
  authDomain: "cards-against-frc.firebaseapp.com",
  projectId: "cards-against-frc",
  storageBucket: "cards-against-frc.appspot.com",
  messagingSenderId: "790727510707",
  appId: "1:790727510707:web:0a104f8eff32ce0e91fec6",
  measurementId: "G-VMTE1V8L3G",
  databaseURL:
    "https://cards-against-frc-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);