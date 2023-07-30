import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import sman24 from "../assets/sman24.svg";

const NavBar = (props) => {
  const { route, display } = props;

  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate(`/${route}`);
  };

  return (
    <div className="border-b-[1px] border-[#F6E8D2] border-solid border-opacity-80 bg-[#fcfcfc] h-[80px] py-[15px] px-[30px] flex items-center justify-between drop-shadow-md">
      <div className="logo h-full">
        <img src={sman24} alt="logo osis" className="h-full" />
      </div>
      <div className="flex gap-[10px] cursor-pointer">
        <div>
          <h1 className="button-login font-send text-black !text-[1rem]">
            contact us
          </h1>
        </div>
        <div onClick={handleLoginButton} className="cursor-pointer">
          <h1 className="button-login !bg-[#ECAA55] font-send !text-[1rem] border-[#362313] border-[1px] border-solid">
            {display}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
