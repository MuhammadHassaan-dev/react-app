import { auth } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const createUserWithFirebase = async (email, password) => {
  console.log("email", email);
  console.log("password", password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user ....", user);
      // ...
    })
    .catch((error) => {
      console.log("error", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
