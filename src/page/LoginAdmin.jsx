import React from "react";
import Background from "../assets/background-login.png";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myStyle = {
    backgroundSize: "cover",
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
    <div className="min-h-screen max-h-screen" style={myStyle}>
      <NavBar display="login admin" route="login" />

      <div className="card-login mt-[100px] shadow-2xl !bg-slate-800 !text-white">
        <h1>Login admin</h1>
        <form
          className="w-[80%] mx-auto py-[30px] block mt-[30px]"
          onSubmit={handleSubmit}
        >
          <label>id :</label>
          <input type="text" className="login-input" />
          <label>password :</label>
          <input type="password" className="login-input" />
          <button className="button-login mt-[30px]" type="submit">
            submit
          </button>
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
