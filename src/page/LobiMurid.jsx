import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { notification } from "antd";

import centang from "../assets/check-circle-svgrepo-com (1).svg";
import osis from "../assets/osisLogo.png";
import sman24 from "../assets/sman24Logo.png";
import mpk from "../assets/mpkLogo.png";
import Kandidat from "../components/Kandidat";

const LobiMurid = () => {
  const [nis, setNIS] = useState(undefined);
  const [nama, setNama] = useState(null);
  const [loading, setLoading] = useState(false);

  const [btnValue, setBtnValue] = useState(0);

  // antd setting
  const [api, contextHolder] = notification.useNotification();
  const notif = (type, msg, des) => {
    api[type]({
      message: msg,
      description: des,
    });
  };

  const handleClick = async () => {
    // query to api by nis
    setLoading(true);
    axios
      .post("https://joyous-fashion-frog.cyclic.app/student/profile", {
        nis: parseInt(nis),
      })
      .then((res) => {
        notif("success", "login berhasil", "nis yang dimasukan sudah valid");
        setNama(res.data.nama);
        setLoading(false);
      })
      .catch((err) => {
        notif("warning", "ada yang salah", err.message);
        setLoading(false);
      });
  };

  const handleSubmit = async () => {
    if (nis === undefined) {
      return notif(
        "warning",
        "Gagal melakukan voting",
        "anda belum memasukan nis"
      );
    }

    axios
      .put("https://joyous-fashion-frog.cyclic.app/ketos/pilih/", {
        nis: parseInt(nis),
        kandidat: btnValue,
      })
      .then((res) => {
        notif(
          "success",
          "Berhasil melakukan voting",
          "terima kasih telah melakukan voting"
        );
        setNIS(undefined);
        setNama(null);
        setBtnValue(0);
      })
      .catch((err) => console.log(err));

    console.log(nis, btnValue);
  };

  return (
    <div className="relative">
      {/* loading section */}
      {loading === true ? (
        <div className="w-full h-full absolute top-0 bg-slate-700 z-50 opacity-50 flex">
          <h1 className="text-center text-white my-[500px] mx-auto opacity-100">
            loading...
          </h1>
        </div>
      ) : (
        <></>
      )}

      <NavBar display="logout" route="" />
      {contextHolder}
      <div className="pb-[0px] w-full bg-[#722340] relative">
        <div className="absolute flex w-fit gap-3 bottom-3 right-3 opacity-90 items-center">
          <img src={sman24} className="h-[35px]" />
          <img src={osis} className="h-[40px]" />
          <img src={mpk} className="h-[40px]" />
        </div>
        <div className="w-[80%] mx-auto">
          {nama !== null ? (
            <div className="relative py-[200px]">
              <h1
                className={`font-poppins text-[3rem] md:text-[3rem] text-center md:leading-[55px] leading-[40px] duration-[2s] ease-out w-full mx-auto text-white`}
              >
                Hi {nama},
              </h1>
              <p className="text-center text-white text-[.9rem]">
                silahkan pilih kandidat sesuai pilihan yang anda suka
              </p>
            </div>
          ) : (
            <div className="relative py-[200px]">
              <h1
                className={`font-poppins text-white !text-[4rem] md:text-[2rem] text-center md:leading-[40px] leading-[40px] duration-[2s] ease-out w-[60%] mx-auto`}
              >
                Masukan nis siswa/i
              </h1>
              <div className="w-[80%] mx-auto h-[35px] relative mt-[50px]">
                <div
                  className=" absolute right-3 bottom-0 z-10 cursor-pointer"
                  onClick={handleClick}
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <input
                  type="number"
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

      <Kandidat />

      {/* pilih kandidat section */}
      {nis !== undefined && (
        <div className="w-full bg-[#3C302A] pb-[50px]">
          <div className="pt-[130px]">
            <h1 className="text-[3rem] text-white text-center font-poppins">
              Submit
            </h1>
            <p className="text-white text-center">pilih dan submit kandidat</p>
          </div>

          <div className="flex gap-[50px] justify-center mx-auto w-[80%] my-[100px] text-[#000000c3]">
            <button
              className={`py-[10px] px-[25px] bg-white text-[.8rem] font-courier relative duration-300 ease-out ${
                btnValue === 1 && "btn-ketos-active"
              }`}
              onClick={() => {
                setBtnValue(1);
              }}
            >
              {btnValue === 1 && (
                <img
                  src={centang}
                  alt=""
                  className="scale-50 absolute bottom-[2px] z-20 right-[-25px]"
                />
              )}
              kandidat 1
            </button>
            <button
              className={`py-[10px] px-[25px] bg-white text-[.8rem] font-courier relative duration-300 ease-out ${
                btnValue === 2 && "btn-ketos-active"
              }`}
              onClick={() => {
                setBtnValue(2);
              }}
            >
              {btnValue === 2 && (
                <img
                  src={centang}
                  alt=""
                  className="scale-50 absolute bottom-[2px] z-20 right-[-25px]"
                />
              )}
              kandidat 2
            </button>
            <button
              className={`py-[10px] px-[25px] bg-white text-[.8rem] font-courier relative duration-300 ease-out ${
                btnValue === 3 && "btn-ketos-active"
              }`}
              onClick={() => {
                setBtnValue(3);
              }}
            >
              {btnValue === 3 && (
                <img
                  src={centang}
                  alt=""
                  className="scale-50 absolute bottom-[2px] z-20 right-[-25px]"
                />
              )}
              kandidat 3
            </button>
          </div>

          <div>
            <button
              className="py-[10px] px-[25px] bg-white text-[.8rem] font-courier block ml-auto mr-[30px]"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LobiMurid;
