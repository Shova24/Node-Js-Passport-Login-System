import { Table } from "antd";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import UserContext from "../Context/Context";

export default function Dashboard() {
  const { user, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  // console.log(user[0].id);

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "email",
    },
  ];
  return <Table dataSource={user} columns={columns} rowKey={(record) => record.id} />;
}
