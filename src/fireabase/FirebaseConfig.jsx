// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgdqPvKUCDj6eSgtoBdK1FknIxzUQ6RNQ",
  authDomain: "ecomm-81fa5.firebaseapp.com",
  projectId: "ecomm-81fa5",
  storageBucket: "ecomm-81fa5.appspot.com",
  messagingSenderId: "899336566521",
  appId: "1:899336566521:web:c7ef27cfa7a7a195ebd428",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}