import React from "react";
import Background from "../assets/background-login.png";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";

import wave from "../assets/wave.svg";

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myStyle = {
    backgroundRepeat: "no-repeat",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const pw = e.target[1].value;

    if (id === "admin" && pw === "jangangolput") {
      dispatch(setUserAuth(true));
      navigate("/app/lobi");
    } else {
      alert("id pw salah");
    }
  };

  return (
    <div
      className="min-h-screen max-h-screen w-full bg-[#ECAA55] relative bg-[bottom]"
      style={myStyle}
    >
      <NavBar display="login admin" route="login" />

      <div className="card-login mt-[100px] shadow-2xl bg-white !text-black">
        <h1>Login admin</h1>
        <form
          className="w-[80%] mx-auto py-[30px] block mt-[30px] z-20"
          onSubmit={handleSubmit}
        >
          <label>id :</label>
          <input type="text" className="login-input z-20" />
          <label>password :</label>
          <input type="password" className="login-input z-20" />
          <button className="button-login mt-[30px]" type="submit">
            submit
          </button>
        </form>

        {/* image */}
      </div>
    </div>
  );
};

export default LoginAdmin;
