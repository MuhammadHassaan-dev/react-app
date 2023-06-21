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
export const firebaseConfig = {
  apiKey: "AIzaSyBK3k2jt556iT4ModBhhqgmPPXAhPA3Kbs",
  authDomain: "reactproject-ad5e2.firebaseapp.com",
  projectId: "reactproject-ad5e2",
  storageBucket: "reactproject-ad5e2.appspot.com",
  messagingSenderId: "479285847401",
  appId: "1:479285847401:web:ae775cd2f5eb8fe0ab49f8",
  measurementId: "G-KQ6PXLRKVQ",
};
// const currentUser = auth.currentUser;
// console.log("currentUser", currentUser);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const DB = getDatabase(app);
const analytics = getAnalytics(app);
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, DB };
