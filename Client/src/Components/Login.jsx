import { Button, Card, Checkbox, Divider, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Card style={{ margin: "25px" }}>
        <Divider>Login</Divider>
        <Form labelAlign="left" labelWrap="true">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}>
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
            ]}>
            <Input.Password />
          </Form.Item>
          <Row justify="end">
            <Button type="submit">Login</Button>
          </Row>
        </Form>
        <Row justify="center">
          <Link to={"/register"}> Register</Link>
        </Row>
      </Card>
    </>
  );
}
