import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import "./login.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (name) => (e) => {
    if (email && password) {
      if (name === "login" || e.key === "Enter") {
        const newUser = {
          email: email,
          password: password,
        };

        axios.post("/api/login", newUser).then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("isLoggedIn", 1);
          setRedirect(true);
          // window.location = "/create-trade"
          // return <Redirect to="/create-trade" />
          // if(res.data.token) {
          // } else if(res.error) {
          //     console.log("sdfsdf")
          //     alert("email: info@gmail.com, password: 123456789")
          // }
        });
      }
    }
  };
  if (redirect) {
    return <Redirect to="/create-trade" />;
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <TextField
        id="outlined-basic"
        className="textfield"
        label="email"
        variant="outlined"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyPressCapture={handleSubmit("")}
      />
      <TextField
        id="outlined-basic"
        label="password"
        className="textfield"
        variant="outlined"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyPressCapture={handleSubmit("")}
      />
      <Button className="login" onClick={handleSubmit("login")}>
        Login
      </Button>
    </div>
  );
};

export default Login;
