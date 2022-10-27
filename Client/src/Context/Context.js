import { createContext, useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:4000/users/get-user");
    const users = await response.json();
    setUser(users);
  };

  const Notification = (text) => {
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
      if (data === "User does not exist") {
        Notification(data);
      } else if (data === "Password did not matched") {
        Notification(data);
      } else {
        Notification("Logged in ");
        navigate("/");
      }
      return;
    } else {
      return await Promise.reject(response);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        getUsers,
        Notification,
        loginApi,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
