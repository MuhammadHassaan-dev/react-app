import React ,{useEffect ,useState}from "react";
import {Outlet , Navigate } from "react-router-dom" ;
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute =()=>{
  const {isAuthenticated} = useAuth0() ;
  console.log("isAuthenticated in Protected Routes",isAuthenticated);
  let [auth,setAuth] =useState(true)
  useEffect(() => {
    console.log("isAuthenticated in Protected Routes",isAuthenticated);
    
    // setAuth(isAuthenticated);
  }, [isAuthenticated]);
  
  
 
  return (
    auth===true ? <Outlet /> : <Navigate to="/" />
  );  
}

export default ProtectedRoute ;