import { Button } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </>
  );
}

export default App;
