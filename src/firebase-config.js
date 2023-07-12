// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updatePassword,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCM_VHDKm8b0_eXV02F3gNiTJswMhXbBAg",
  authDomain: "firstreactapp-ffe15.firebaseapp.com",
  projectId: "firstreactapp-ffe15",
  storageBucket: "firstreactapp-ffe15.appspot.com",
  messagingSenderId: "708047970087",
  appId: "1:708047970087:web:d68f86b90ad1dd35909302",
  measurementId: "G-3V6GV1X5P9",
};
// const currentUser = auth.currentUser;
// console.log("currentUser", currentUser);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const DB = getDatabase(app);
const analytics = getAnalytics(app);
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, DB };
