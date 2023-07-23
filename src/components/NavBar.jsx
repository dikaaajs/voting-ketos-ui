import React from "react";
import LogoOsis from "../assets/logo-osis.png";

const NavBar = () => {
  return (
    <div className="border-b-[1px] border-[#c2c0c0] border-solid border-opacity-80 bg-[#fcfcfc] h-[80px] py-[15px] px-[30px] flex items-center justify-between">
      <div className="logo h-full">
        <img src={LogoOsis} alt="logo osis" className="h-full" />
      </div>
      <div>
        <h1 className="button-login font-poppins !text-[1rem]">contact us</h1>
      </div>
    </div>
  );
};

export default NavBar;
