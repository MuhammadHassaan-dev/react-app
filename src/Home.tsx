import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";

type role = 'Admin' | 'User'
   
 let userName:string="Hassaan"; 
 let userAge :Number =27 ;

 interface Address{
    houseNo: number ,
    street :string ,
    city:string ,

 }
 interface user{
  name:string ,
  id:number
 } ;

 let address : Address ={
   houseNo: 55,
   street: "xyz",
   city : "Johar Town",
 }
 let userObj ={
  name:"hassaan" ,
  id:5
 }

interface IUser {
  id?: number
  name: string,
  email?: string,
  role?: role
}

const Home = () => {
  const navigate = useNavigate();
  const [person,setPerson] =useState<IUser>(userObj) ;
  let componentName:string ="Home" ;
 
  const initialUser: IUser = {
    id: 0,
    name: "",
    email: "",
    role: "User"
  }

   function getUserRole(userId:number , userName:string){

   }
   function getAddress(address:Address) : string {
    return "abc"
   }
   const getuserList=(users:string[] | string | Array<string> | Array <{name:string ,id:number}>)=>{

   }
   type fields = "Electrical Engineering" | "CS" | "Mechanical Engineering" ;
    
   interface universityDepartment {
    name:string ;
    courseSelected : fields ;
   }
   const department :universityDepartment  ={
    name:"D block" ,
    courseSelected : "CS" ,
   }
  const [users, setUsers] = useState<IUser[]>([])
  const [user, setUser] = useState<IUser>(initialUser)

  interface IUserFunc {
    firstName: string,
    lastName: any
  }

  const userFunc = ({firstName, lastName}: IUserFunc): IUserFunc => {
    return {firstName, lastName}
  }

  useEffect(() => {
    setUsers([
      {
        name: "blablabla"
      }
    ])
  }, [])

  return (
    <Row>
      <Col span={12}>Welcome to the React js {componentName} Component </Col>
      <Col span={12}>Welcome to the React js {componentName} Component </Col>
      
      <Col span={12}>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      </Col>
    </Row>
  );
};

export default Home;