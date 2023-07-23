import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";
import axios from "axios";

const ProtectCoblos = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("masuk");

  const refreshToken = async () => {
    try {
      //   const accessToken = await axios.post("http://localhost:4000/token", {
      //     refreshToken: localStorage.getItem("refreshToken"),
      //   });
      //   const verifyToken = await axios.get("http://localhost:4000/admin", {
      //     headers: {
      //       authorization: accessToken.data.accessToken,
      //     },
      //   });

      dispatch(setUserAuth(true));
      console.log("verifed");
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return isLoggedIn ? <Outlet /> : <h1>Loading ...</h1>;
};

export default ProtectCoblos;
