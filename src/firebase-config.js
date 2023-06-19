// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK3k2jt556iT4ModBhhqgmPPXAhPA3Kbs",
  authDomain: "reactproject-ad5e2.firebaseapp.com",
  projectId: "reactproject-ad5e2",
  storageBucket: "reactproject-ad5e2.appspot.com",
  messagingSenderId: "479285847401",
  appId: "1:479285847401:web:ae775cd2f5eb8fe0ab49f8",
  measurementId: "G-KQ6PXLRKVQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
