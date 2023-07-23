import React from "react";
import Background from "../assets/background-login.png";

const LoginMurid = () => {
  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="relative min-h-screen pt-[50px]" style={myStyle}>
      <div className="card-login">
        <h1>Login murid</h1>
        <form className="w-[80%] mx-auto py-[30px] block mt-[30px]">
          <label>NIS :</label>
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

export default LoginMurid;
