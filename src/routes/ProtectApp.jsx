import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";
import axios from "axios";

const ProtectApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const ini = localStorage.getItem("sumimaseng");
  useEffect(() => {
    if (ini === "arigato") {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [ini]);

  return isLoggedIn ? <Outlet /> : <h1>Loading ...</h1>;
};

export default ProtectApp;
