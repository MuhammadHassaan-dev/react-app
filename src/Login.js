import React from "react";
import { createUserWithFirebase } from "./firebaseFunction";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
};
export default Login;