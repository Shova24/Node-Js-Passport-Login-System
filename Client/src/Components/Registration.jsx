import { Button, Card, Checkbox, Divider, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <Card style={{ margin: "25px" }}>
        <Divider>Register</Divider>
        <Form labelAlign="left" labelWrap="true">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>
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
            <Button type="submit">Submit</Button>
          </Row>
        </Form>
        <Row justify="center">
          <Link to={"/login"}> Login</Link>
        </Row>
      </Card>
    </>
  );
}
