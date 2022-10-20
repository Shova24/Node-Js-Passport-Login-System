import { Button, Card, Checkbox, Divider, Form, Input, Row } from "antd";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [form] = Form.useForm();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const createNewUser = (values) => {
    fetch("http://localhost:4000/users/register", {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("====================================");
        console.log(json);
        console.log("====================================");
        setUser(json);
      });
    navigate("/");
  };
  // console.log(user);

  return (
    <>
      <Card style={{ margin: "25px" }}>
        <Divider>Register</Divider>
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          labelAlign="left"
          initialValues={{
            remember: true,
          }}
          labelWrap="true"
          onFinish={createNewUser}>
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
