import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";
import axios from "axios";

const ProtectApp = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const refreshToken = async () => {
    try {
      dispatch(setUserAuth(true));
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return isLoggedIn ? <Outlet /> : <h1>Loading ...</h1>;
};

export default ProtectApp;
