import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, auth } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const createUserWithFirebase = async (email, password) => {
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
