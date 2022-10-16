import { Button } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((res) => res.json())
      .then((json) => setText(json));
  }, [text.length]);

  console.log(text);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </>
  );
}

export default App;
