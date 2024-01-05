// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRw8PA3gkLi3XIIgSBCSBBjVcStK-XwMc",
  authDomain: "linkedinclone-2a54c.firebaseapp.com",
  projectId: "linkedinclone-2a54c",
  storageBucket: "linkedinclone-2a54c.appspot.com",
  messagingSenderId: "107534537655",
  appId: "1:107534537655:web:4091c5135ab06f4d140e32",
  measurementId: "G-MZE2KRVKJ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
// const analytics = getAnalytics(app);  