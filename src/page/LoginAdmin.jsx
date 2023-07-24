import React from "react";
import Background from "../assets/background-login.png";
import NavBar from "../components/NavBar";

const LoginAdmin = () => {
  const myStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="min-h-screen max-h-screen"
      style={myStyle}
    >
      <NavBar />

      <div className="card-login mt-[100px] shadow-2xl !bg-slate-800 !text-white">
        <h1>Login admin</h1>
        <form className="w-[80%] mx-auto py-[30px] block mt-[30px]">
          <label>id :</label>
          <input type="text" className="login-input" />
          <label>password :</label>
          <input type="text" className="login-input" />
          <button className="button-login mt-[30px]">submit</button>
        </form>
      </div>

      {/* <img
        src={Background}
        alt="background"
        className="absolute z-[-10] top-0 mx-auto"
      /> */}
    </div>
  );
};

export default LoginAdmin;
