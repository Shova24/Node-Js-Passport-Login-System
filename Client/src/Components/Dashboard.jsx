import { Table } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users/get-user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
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
  return <Table dataSource={user} columns={columns} />;
}
