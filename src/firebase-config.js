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
  apiKey: "AIzaSyDmP3faSyWaAtrx7y5Kb7OeoOyCzUt7hHs",
  authDomain: "reactapp-f7d64.firebaseapp.com",
  projectId: "reactapp-f7d64",
  storageBucket: "reactapp-f7d64.appspot.com",
  messagingSenderId: "674190203491",
  appId: "1:674190203491:web:33ccd1fc98bcb8ed5ab656",
  measurementId: "G-6TYVLEEQEZ",
};
// const currentUser = auth.currentUser;
// console.log("currentUser", currentUser);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const DB = getDatabase(app);
const analytics = getAnalytics(app);
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, DB };
