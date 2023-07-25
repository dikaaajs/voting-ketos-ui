import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LogoOsis from "../assets/logo-osis.png";

const NavBar = (props) => {
  console.log(props);
  const { route, display } = props;

  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate(`/${route}`);
  };

  return (
    <div className="border-b-[1px] border-[#c2c0c0] border-solid border-opacity-80 bg-[#fcfcfc] h-[80px] py-[15px] px-[30px] flex items-center justify-between">
      <div className="logo h-full">
        <img src={LogoOsis} alt="logo osis" className="h-full" />
      </div>
      <div className="flex gap-[10px] cursor-pointer">
        <div>
          <h1 className="button-login font-poppins !text-[1rem]">contact us</h1>
        </div>
        <div onClick={handleLoginButton} className="cursor-pointer">
          <h1 className="button-login !bg-white !text-black border-solid border-black border-[1px] font-poppins !text-[1rem]">
            {display}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
