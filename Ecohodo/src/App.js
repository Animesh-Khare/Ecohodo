import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import UserList from "./component/UserList/UserList";
import Profile from "./component/Profile/Profile";
import Chart from "./Chart/Chart";
import { useEffect } from "react";
import { getHistoricData, getCurrentData } from "./slices/chartSlice";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://archive-api.open-meteo.com/v1/era5?latitude=52.52&longitude=13.41&start_date=2023-09-01&end_date=2023-09-26&hourly=temperature_2m"
      )
      .then((resp) => {
        console.log("resp of historic data", resp.data.hourly);
      })
      .catch((err) => {
        console.log("error ==>", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Ecohodo</h1>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
