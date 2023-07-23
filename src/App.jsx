import "./App.css";
import glassx from "./assets/Block_Cross_2D_1_0001.png";
import glassTriangle from "./assets/Atom_Tetra_1_0002.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  const { ref: headlineJumbotron, inView: viewHeadlineJumbotron } = useInView({
    threshold: 0.1,
  });
  const { ref: paraJumbotron, inView: viewParaJumbotron } = useInView({
    threshold: 0.1,
  });
  const { ref: triangle, inView: viewTriangle } = useInView({
    threshold: 0.1,
    delay: 400,
  });
  const { ref: x, inView: viewX } = useInView({
    threshold: 0.1,
    delay: 300,
  });

  return (
    <div className="parent-elemeent w-full h-fit relative flex flex-col gap-[150px]">
      {/* jumbotron section */}
      <div
        // onChange={(inView, entry) => handleAnimation(inView)}
        className={`py-[150px] w-[89%] md:w-[60%] mx-auto flex flex-col gap-[40px] duration-[2s] ease-out jumbotron`}
      >
        <img
          ref={triangle}
          src={glassTriangle}
          alt=""
          className={`w-[150px] absolute top-[350px] duration-[1s] ease-out z-[-10] ${
            viewTriangle ? "right-0 opacity-100" : "right-[-30px] opacity-0"
          }`}
        />
        <img
          ref={x}
          src={glassx}
          alt=""
          className={`w-[180px] absolute top-[50px] z-[-10] duration-[1s] ease-out ${
            viewX ? "left-[30px] opacity-100" : "left-[-10px] opacity-0"
          }`}
        />

        <h1
          ref={headlineJumbotron}
          className={`font-poppins text-[2rem] md:text-[3rem] text-center md:leading-[60px] leading-[40px] duration-[2s] ease-out ${
            viewHeadlineJumbotron ? "opacity-100 translate-x-0" : "opacity-0"
          }`}
        >
          Selamat datang di web app pemilihan osis
        </h1>
        <p
          ref={paraJumbotron}
          className={`text-center duration-[2s] ease-out ${
            viewParaJumbotron ? "opacity-100 translate-x-0" : "opacity-0"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
          nec enim at congue. Phasellus lacinia venenatis ipsum eu rhoncus.
          Aliquam viverra, justo ac dignissim pellentesque, mauris mi molestie
        </p>
      </div>

      {/* panduan section */}
      <div className="py-[40px] bg-black">
        <h1 className="font-poppins text-[2rem] text-center md:leading-[60px] leading-[40px] !text-white">
          Panduan
        </h1>
        <p className="text-center text-white text-[.9rem]">
          berikut adalah cara menggunakan aplikasi ini dengan baik dan benar
        </p>

        <div className="flex gap-[50px] justify-center my-[80px] w-[80%] mx-auto">
          <div className="container-panduan">
            <div className="w-1/4 flex justify-center items-center !bg-slate-100 rounded-l-[5px]">
              <span className="material-symbols-outlined">shield_person</span>
            </div>
            <div className="p-panduan">
              <p>login super admin terlebih dahulu</p>
            </div>
          </div>
          <div className="container-panduan">
            <div className="w-1/4 flex justify-center items-center !bg-slate-100 rounded-l-[5px]">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="p-panduan">
              <p>setiap siswa/i memasukan NIS pada halaman login siswa</p>
            </div>
          </div>
          <div className="container-panduan">
            <div className="w-1/4 flex justify-center items-center !bg-slate-100 rounded-l-[5px]">
              <span className="material-symbols-outlined">done</span>
            </div>
            <div className="p-panduan">
              <p>siswa/i bisa memilih kandidat setelah memasukan NIS</p>
            </div>
          </div>
        </div>
      </div>

      {/* kandidat section */}
      <div className="text-black py-[30px]">
        <div>
          <h1 className="font-poppins text-[2rem] text-center md:leading-[60px] leading-[40px]">
            Kandidat
          </h1>
          <p className="text-center">
            berikut adalah beberapa kandidat pemilihan osis SMAN 24 bandung 2023
          </p>
        </div>

        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
