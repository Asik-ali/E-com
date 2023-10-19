// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvBv3Q-mCvn5fUnNFlyexl4eHYWf2dBU",
  authDomain: "ecom-41676.firebaseapp.com",
  projectId: "ecom-41676",
  storageBucket: "ecom-41676.appspot.com",
  messagingSenderId: "961849005296",
  appId: "1:961849005296:web:5b6938aa8acddfc9171e35"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}