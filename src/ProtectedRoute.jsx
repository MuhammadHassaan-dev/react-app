import React ,{useEffect ,useState}from "react";
import {Outlet , Navigate } from "react-router-dom" ;
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute =()=>{
  const {isAuthenticated} = useAuth0() ;
  console.log("isAuthenticated in Protected Routes",isAuthenticated);
  let [auth,setAuth] =useState(false)
  useEffect(() => {
    console.log("isAuthenticated in Protected Routes",isAuthenticated);
    // Update the auth state after the isAuthenticated state has changed.
    setAuth(isAuthenticated);
  }, [isAuthenticated]);
  
  
 
  return (
    auth===true ? <Outlet /> : <Navigate to="/" />
  );  
}

export default ProtectedRoute ;