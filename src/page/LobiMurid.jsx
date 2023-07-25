import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LobiMurid = () => {
  const muridNIS = useSelector((state) => state.siswa.NIS);

  return (
    <div>
      <NavBar display="login murid" route="app/murid" />
      <div className="py-[50px] w-full">
        <div>
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
            <>
              <h1
                className={`font-poppins text-[2rem] md:text-[2rem] text-center md:leading-[40px] leading-[40px] duration-[2s] ease-out w-[60%] mx-auto`}
              >
                silahkan login murid terlebih dahulu
              </h1>
              <Link
                className="button-login font-poppins !text-[1.4rem] my-[50px] !px-[15px block w-fit"
                to={"/app/murid"}
              >
                login murid
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LobiMurid;
