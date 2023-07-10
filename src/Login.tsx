import React from "react";
import { Button, Checkbox, Form, Input ,Row,Col} from "antd";
import { createUserWithFirebase } from "./firebaseFunction";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect ,user, isAuthenticated, isLoading ,logout} = useAuth0();
  console.log("isAuthenticated",isAuthenticated);
  
  const onFinish = (values: any) => {
    createUserWithFirebase(values.email, values.password);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            type: "email",
            message: "Please enter a valid email address!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Row>
    {
      isAuthenticated ? (
        <Col>
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.href = 'http://localhost:3000/logout' } })}>Log Out</Button>
       </Col>
      ) :
      (
        <Col>
          <Button onClick={() => loginWithRedirect()}>Auth0 Login</Button>
       </Col>
      )
    }
    
       
       </Row>
    </>
  );
  
};
export default Login;
