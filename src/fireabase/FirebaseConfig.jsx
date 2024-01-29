// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTRXKmBScxijD9n7jRErbHda_e6uD404E",
  authDomain: "zero-ads-wallet.firebaseapp.com",
  projectId: "zero-ads-wallet",
  storageBucket: "zero-ads-wallet.appspot.com",
  messagingSenderId: "125107972552",
  appId: "1:125107972552:web:52793904858742943538fd",
  measurementId: "G-98FKS26TXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}