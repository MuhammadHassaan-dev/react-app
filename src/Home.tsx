import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";

type role = 'Admin' | 'User'

interface IUser {
  id?: number
  name: string,
  email?: string,
  role?: role
}

const Home = () => {
  const navigate = useNavigate();

  const initialUser: IUser = {
    id: 0,
    name: "",
    email: "",
    role: "User"
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
      <Col span={12}>Welcome to the React js Practice project</Col>
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
