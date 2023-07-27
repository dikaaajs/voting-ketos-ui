import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import bg from "../assets/backgroundLoginMurid.png";

const LobiMurid = () => {
  const muridNIS = useSelector((state) => state.siswa.NIS);
  const [NIS, setNIS] = useState("");

  const handleClick = () => {
    // query to api by NIS
  };

  return (
    <div>
      <NavBar display="logout" route="" />
      <div className="py-[100px] w-full">
        <div className="w-[60%] mx-auto">
          {muridNIS === null ? (
            <>
              <h1
                className={`font-poppins text-[2rem] md:text-[2rem] text-center md:leading-[40px] leading-[40px] duration-[2s] ease-out w-[60%] mx-auto`}
              >
                Hallo Muhamad Andika Rafli,
              </h1>
              <p className="text-center ">
                silahkan klik coblos untuk memilih. ingatlah untuk memilih
                sesuai hati nurani
              </p>
              <Link
                className="button-login font-poppins !text-[1.4rem] my-[50px] !px-[15px] block w-fit"
                to={"/coblos/ketos"}
              >
                coblos
              </Link>
            </>
          ) : (
            <div className="relative">
              <h1
                className={`font-poppins text-[2rem] md:text-[2rem] text-center md:leading-[40px] leading-[40px] duration-[2s] ease-out w-[60%] mx-auto`}
              >
                Masukan NIS siswa/i
              </h1>
              <div className="w-full h-[35px] relative mt-[50px]">
                <div
                  className=" absolute right-3 bottom-0 z-10 cursor-pointer"
                  onClick={handleClick}
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>

                <input
                  type="text"
                  className="border-solid border-[1px] border-black rounded-[4px] w-full h-[35px] font-courier pl-[5px]"
                  placeholder="masukan ..."
                  onChange={(e) => {
                    setNIS(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LobiMurid;
