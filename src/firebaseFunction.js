import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const createUserWithFirebase = createUserWithEmailAndPassword(
  auth,
  email,
  password
)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("user ....", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
