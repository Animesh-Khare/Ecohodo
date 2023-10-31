import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata ===>", formdata);
    localStorage.setItem("username", formdata.username);
    localStorage.setItem("password", formdata.password);

    if (formdata.username.length > 0 && formdata.password.length > 0) {
      navigate("/dashboard");
    } else {
      alert("fill user name and password");
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        paddingTop: "20px",
        boxShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="User Name"
          name="username"
          onChange={(e) => handleChange(e)}
        ></TextField>
        <br />
        <br />
        <TextField
          label="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        ></TextField>
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
