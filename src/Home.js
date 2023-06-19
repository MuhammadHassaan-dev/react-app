import React from "react";
import { Col, Row, Button } from "antd";
const Home = () => {
  return (
    <Row>
      <Col span={12}>Welcome to the React js Practice project</Col>
      <Col span={12}>
        <Button>Log in</Button>
      </Col>
    </Row>
  );
};

export default Home;
