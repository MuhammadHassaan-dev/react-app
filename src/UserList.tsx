import React, {useState} from "react";

const UserList:React.FC =()=>{
 
  let userName:string  = "Ali";

  let userAge:number =54;

  interface User {
    name ?:string ,
    id:number ,
    isLoggedIn:boolean ,
  }

  let personObj ={
    id:54 ,
    isLoggedIn :true ,
  }
  const [person ,setPerson] = useState<User>(personObj) ;
  let user : User ={
    name:"Ali",
    id:66,
    isLoggedIn:false,
  }
  interface userObj {
    firstName : string ,
    lastName : string ,
  }

  const getUser=(user:User): userObj=>{

   return {firstName:"Ahmad" , lastName:"Ali" } ;
  }
  
  type field ="CS" | "Eectrical" | "Mechanical" ;

  interface Student {
    name:string,
    department:field ,
    id:number ,
  }

  let std1 : Student ={
    name:"abc",
    department:"CS" ,
    id:22 ,
  }
  
  type userList = User | Array<User> | User [] | Array<{name:string ,id:number}> ;
  


    return(
      <>
         <p>UserList component</p>
      </>
    )
}

export default UserList ;