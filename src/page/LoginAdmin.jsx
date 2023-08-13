import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../redux/slice/authSlice";

const pp = "render page";
const ppp = "homepage";

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

    if (id === pp && pw === ppp) {
      localStorage.setItem("sumimaseng", "arigato");
      navigate("/app/lobi");
    } else {
      alert("id pw salah");
    }
  };

  return (
    <div
      className="min-h-screen max-h-screen w-full bg-[#722340] relative bg-[bottom]"
      style={myStyle}
    >
      <NavBar display="login admin" route="login" />

      <div className="card-login mt-[100px] shadow-2xl bg-white !text-black">
        <h1 className="text-[3rem]">Login admin</h1>
        <form
          className="w-[80%] mx-auto py-[20px] mt-[30px] z-20 flex flex-col gap-[15px]"
          onSubmit={handleSubmit}
        >
          <div>
            <label>id :</label>
            <input type="text" className="login-input z-20" />
          </div>
          <div>
            <label>password :</label>
            <input type="password" className="login-input z-20" />
          </div>
          <button
            className="bg-slate-900 text-white text-[.8rem] font-courier w-[110px] py-[8px] mx-auto mt-[20px] rounded-md"
            type="submit"
          >
            submit
          </button>
        </form>

        {/* image */}
      </div>
    </div>
  );
};

export default LoginAdmin;
