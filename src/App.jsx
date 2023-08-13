import "./App.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// svg
import manusia1 from "./assets/manusia1.svg";
import manusia2 from "./assets/s 1.svg";
import wave from "./assets/wave.svg";
import muridMemilih from "./assets/murid memilih.svg";
import loginAdmin from "./assets/login-admin.svg";
import loginMurid from "./assets/login murid.svg";
import manusiaPanduan from "./assets/manusiaPanduan.png";
import lambangKerajaan from "./assets/lambangKerajaan.svg";
import bintang from "./assets/bintang.svg";

// component
import FooterHomepage from "./components/Footer";

// data
import NavBar from "./components/NavBar";
import Kandidat from "./components/Kandidat";

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
  const { ref: hPanduan, inView: viewHPanduan } = useInView({
    threshold: 0.1,
    delay: 200,
  });
  const { ref: panduan1, inView: viewPanduan1 } = useInView({
    threshold: 0.1,
    delay: 700,
  });
  const { ref: panduan2, inView: viewPanduan2 } = useInView({
    threshold: 0.1,
    delay: 600,
  });
  const { ref: panduan3, inView: viewPanduan3 } = useInView({
    threshold: 0.1,
    delay: 500,
  });

  return (
    <div className="parent-elemeent w-full h-fit relative flex flex-col text-white">
      {/* navbar */}
      <NavBar display="login admin" route="login" />

      {/* jumbotron section */}
      <div
        className={`py-[200px] flex flex-col duration-[2s] ease-out jumbotron bg-[#722340] relative w-full h-fit`}
      >
        <img
          ref={triangle}
          src={manusia1}
          alt=""
          className={`absolute scale-125 bottom-[50px] left-[90px] duration-[1s] ease-out z-[10] w-[200px] ${
            viewTriangle ? "opacity-100" : " opacity-0"
          }`}
        />
        <img
          ref={x}
          src={manusia2}
          alt=""
          className={`w-[230px] scale-125 absolute bottom-[40px] right-[90px] z-[10] duration-[1s] ease-out ${
            viewX ? " opacity-100" : " opacity-0"
          }`}
        />
        <img
          src={wave}
          alt=""
          className={`w-full absolute bottom-[-10px] duration-[1s] ease-out z-[8] ${
            viewX ? " opacity-100" : " opacity-0"
          }`}
        />
        <img
          src={lambangKerajaan}
          alt=""
          className={`absolute left-[46%] bottom-[120px] duration-[1s] ease-out z-[10] ${
            viewX ? " opacity-100" : " opacity-0"
          }`}
        />
        <img
          src={bintang}
          alt=""
          className={`absolute left-[250px] top-[150px] duration-[1s] ease-out z-[10] ${
            viewX ? " opacity-100" : " opacity-0"
          }`}
        />

        <div className="w-[60%] mx-auto">
          <h1
            ref={headlineJumbotron}
            className={`font-poppins text-[2rem] md:text-[3rem] text-center md:leading-[60px] leading-[40px] duration-[2s] ease-out ${
              viewHeadlineJumbotron ? "opacity-100 translate-x-0" : "opacity-0"
            }`}
          >
            Selamat datang di web app pemilihan ketua osis
          </h1>
          <p
            ref={paraJumbotron}
            className={`text-center duration-[2s] ease-out pt-[30px] pb-[200px] ${
              viewParaJumbotron ? "opacity-100 translate-x-0" : "opacity-0"
            }`}
          >
            Ready for change, ready to lead
          </p>
        </div>
      </div>

      {/* panduan section */}
      <div className="py-[70px] bg-[#202020] relative">
        <img
          src={manusiaPanduan}
          alt=""
          className="absolute h-[400px] right-[-70px] bottom-[-30px]"
        />

        <div
          ref={hPanduan}
          className={`w-fit block mx-auto duration-[2s] ease-out ${
            viewHPanduan ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`font-poppins text-[5rem] text-center md:leading-[60px] leading-[40px] !text-white`}
          >
            Panduan
          </h1>
        </div>

        {/* card component */}
        <div className="flex gap-[50px] justify-center my-[80px] w-[70%] mx-auto">
          <img src={loginAdmin} className="scale-80" />
          <img src={loginMurid} className="scale-80" />
          <img src={muridMemilih} className="scale-80" />
        </div>
      </div>

      {/* kandidat section */}
      <Kandidat />

      {/* footer */}
      <FooterHomepage />
    </div>
  );
}

export default App;
