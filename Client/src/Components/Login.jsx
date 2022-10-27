import { Button, Card, Checkbox, Divider, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../Context/Context";

export default function Login() {
  const { user, loginApi } = useContext(UserContext);

  const [form] = Form.useForm();

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
