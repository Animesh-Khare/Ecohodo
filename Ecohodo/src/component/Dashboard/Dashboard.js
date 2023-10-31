import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [showuser, setShowUser] = useState(false);
  const [showName, setShowName] = useState("");
  const [showprofile, setShowProfile] = useState(false);

  const localUser = localStorage.getItem("username");
  console.log("localUser", localUser);

  useEffect(() => {
    if (localUser.toLowerCase().includes("animesh")) {
      setShowProfile(true);
      setShowUser(false);
      setShowName("User");
    } else if (localUser.toLowerCase().includes("vijay")) {
      setShowProfile(false);
      setShowUser(true);
      setShowName("Admin");
    }
  }, []);

  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <div>
      <Box>
        <Typography>Dashboard page</Typography>
        <Typography>Hello {showName}</Typography>
        <Button
          onClick={logoutHandler}
          sx={{
            textAlign: "end",
          }}
        >
          {" "}
          Logout
        </Button>
      </Box>
      <Box
        sx={{
          border: "2px solid red",
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
          padding: "5px 20px",
        }}
      >
        {showuser && <Link to="/userlist">User List</Link>}
        {showprofile && <Link to="/profile">Profile</Link>}
      </Box>
    </div>
  );
};

export default Dashboard;
