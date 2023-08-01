import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import bg from "../assets/backgroundLoginMurid.png";
import { notification } from "antd";

import headerKandidat from "../assets/headerKandidat.svg";
import burungKiri from "../assets/burungKiri.svg";
import burungKanan from "../assets/burungKanan.svg";

const LobiMurid = () => {
  const [nis, setNIS] = useState(undefined);
  const [nama, setNama] = useState(null);
  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const handleClick = async () => {
    // query to api by nis
    setLoading(true)
    axios
      .post("https://joyous-fashion-frog.cyclic.app/user/profile/", {
        nis: parseInt(nis),
      })
      .then((res) => {
        setNama(res.data.nama);
        setLoading(false)
      })
      .catch((err) => {
        console.log("nis tidak ditemukan");
        console.log(err.message);
      });
  };

  console.log(loading)

  return (
    <div className="relative">
      {/* loading section */}
      { loading === true ? (
        <div className="w-full h-full absolute top-0 bg-slate-700 z-50 opacity-50 flex">
          <h1 className="text-center text-white my-[500px] mx-auto opacity-100">loading...</h1>
        </div>
      ) : (
        <></>
      )
      }


      <NavBar display="logout" route="" />
      {contextHolder}
      <div className="py-[180px] pb-[200px] w-full bg-[#ECAA55]">
        <div className="w-[60%] mx-auto">
          {nama !== null ? (
            <>
              <h1
                className={`font-poppins text-[3rem] md:text-[3rem] text-center md:leading-[55px] leading-[40px] duration-[2s] ease-out w-full mx-auto text-white`}
              >
                Hi {nama},
              </h1>
              <p className="text-center text-white text-[.9rem]">
                silahkan pilih kandidat sesuai pilihan yang anda suka
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
                className={`font-poppins text-white text-[2rem] md:text-[2rem] text-center md:leading-[40px] leading-[40px] duration-[2s] ease-out w-[60%] mx-auto`}
              >
                Masukan nis siswa/i
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
                  className="border-solid border-white border-[1px] rounded-[4px] w-full h-[35px] font-courier pl-[5px] focus:border-blue-100 focus:border-[1px]"
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

      <div className="w-full pb-[500px]">
        <div className="w-full relative">
          <img src={headerKandidat} className="mx-auto scale-75" alt="" />
          <img
            src={burungKanan}
            className="absolute scale-75 right-40 top-40"
            alt=""
          />
          <img
            src={burungKiri}
            className="absolute scale-75 left-40 top-40"
            alt=""
          />
        </div>
      </div>

      {/* pilih kandidat section */}
      <div className="w-full bg-[#3C302A] pb-[50px]">
        <div className="pt-[130px]">
          <h1 className="text-[3rem] text-white text-center font-poppins">Submit Pilihanmu</h1>
        </div>

        <div className="flex gap-[50px] justify-center mx-auto w-[80%] my-[100px]">
          <button className="py-[8px] px-[20px] bg-white rounded-[5px] text-[1.5rem] font-poppins">kandidat 1</button>
          <button className="py-[8px] px-[20px] bg-white rounded-[5px] text-[1.5rem] font-poppins">kandidat 1</button>
          <button className="py-[8px] px-[20px] bg-white rounded-[5px] text-[1.5rem] font-poppins">kandidat 1</button>
        </div>

        <div>
          <button className="py-[8px] px-[20px] bg-white rounded-[5px] text-[1.5rem] font-poppins block ml-auto mr-[30px]">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LobiMurid;
