import { Button, Card, Checkbox, Divider, Form, Input, Row, notification } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const getusers = async () => {
    const response = await fetch("http://localhost:4000/users/get-user");
    const users = await response.json();
    setUser(users);
  };
  useEffect(() => {
    getusers();
  }, []);
  const [form] = Form.useForm();
  let logInUser = null;
  const login = (values) => {
    user.map((el) => {
      if (el.email === values.email) {
        return (logInUser = el);
      }
    });
    if (logInUser) {
      navigate("/");
    } else {
      console.log("Can not log in ");
    }
  };
  // console.log(user);

  const open = (text) => {
    notification.open({
      message: text,
    });
  };

  const loginApi = async (values) => {
    const response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      if (typeof data === "object") {
        open("Logged in ");
        navigate("/");
      } else {
        open("password did not matched");
        console.log("Not found as password is incorrect", data);
      }
      // }
      return;
    } else {
      return await Promise.reject(response);
    }
  };
  return (
    <>
      <Card style={{ margin: "25px" }}>
        <Divider>Login</Divider>
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
          onFinish={loginApi}>
          {/* onFinish={login}> */}
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
            <Button htmlType="submit">Login</Button>
          </Row>
        </Form>
        <Row justify="center">
          <Link to={"/register"}> Register</Link>
        </Row>
      </Card>
    </>
  );
}
