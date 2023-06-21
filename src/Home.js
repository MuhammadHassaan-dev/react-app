import React from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
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
