// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHGHVMPyroMsD-fuTh7qngvdIbC6hnes",
  authDomain: "ecom-original.firebaseapp.com",
  projectId: "ecom-original",
  storageBucket: "ecom-original.appspot.com",
  messagingSenderId: "604180970567",
  appId: "1:604180970567:web:a23377c5ff76f37a034562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}