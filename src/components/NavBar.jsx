import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import pemiraLogo from "../assets/pemira.png";

const NavBar = (props) => {
  const { route, display } = props;

  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate(`/${route}`);
  };

  return (
    <div className="bg-[#F6D2D2] h-[80px] py-[15px] px-[30px] flex items-center justify-between drop-shadow-md">
      <img src={pemiraLogo} alt="logo osis" className="h-[60%] block mr-auto" />
      <div className="cursor-pointer">
        <div
          onClick={handleLoginButton}
          className="cursor-pointer py-[12px] px-[25px] bg-[#722340] rounded-[5px]"
        >
          <p className="font-courier text-[.8rem] flex items-center h-fit text-white">
            {display}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
