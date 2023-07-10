import React ,{useEffect ,useState}from "react";
import {Route ,Redirect } from "react-router-dom" ;
const ProtectedRoute =({auth ,element :Component , ...rest})=>{
  return (
    <Route  {...rest} render={(props)=>{
        if(auth) return <Component {...props} /> ;
        if (!auth) return <Redirect to={{path:"/" ,state: {from:props.location}}} />
    }}/>
  )
}

export default ProtectedRoute ;