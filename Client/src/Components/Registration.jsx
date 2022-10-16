import { Button, Card, Checkbox, Divider, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [form] = Form.useForm();
  const createNewUser = (newUser) => {
    fetch("");
  };
  const register = (values) => {
    const newUser = {
      id: Date.now().toString(),
      username: values.username,
      email: values.email,
      password: values.password,
    };
    console.log(newUser);
  };
  return (
    <>
      <Card style={{ margin: "25px" }}>
        <Divider>Register</Divider>
        <Form form={form} labelAlign="left" labelWrap="true" onFinish={register}>
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
            <Button htmlType="submit">Submit</Button>
          </Row>
        </Form>
        <Row justify="center">
          <Link to={"/login"}> Login</Link>
        </Row>
      </Card>
    </>
  );
}
