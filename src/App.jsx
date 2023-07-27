import "./App.css";
import glassx from "./assets/Block_Cross_2D_1_0001.png";
import glassTriangle from "./assets/Atom_Tetra_1_0002.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// svg
import manusia1 from "./assets/manusia1.svg";
import manusia2 from "./assets/manusia2.svg";
import wave from "./assets/wave.svg";
import muridMemilih from "./assets/murid-memilih.svg";
import loginAdmin from "./assets/login-admin.svg";
import loginMurid from "./assets/login-murid.svg";
import manusiaPanduan from "./assets/manusiaPanduan.svg";

// component
import CandidateCard from "./components/CandidateCard";
import FooterHomepage from "./components/Footer";

// data
import { candidate } from "./data/candidateData";
import NavBar from "./components/NavBar";

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
        className={`py-[200px] flex flex-col duration-[2s] ease-out jumbotron bg-[#ECAA55] relative w-full h-fit`}
      >
        <img
          ref={triangle}
          src={manusia1}
          alt=""
          className={`absolute bottom-[20px] left-[90px] duration-[1s] ease-out z-[10] w-[200px] ${
            viewTriangle ? "opacity-100" : " opacity-0"
          }`}
        />
        <img
          ref={x}
          src={manusia2}
          alt=""
          className={`w-[140px] absolute bottom-[10px] right-[90px] z-[10] duration-[1s] ease-out ${
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
            className={`text-center duration-[2s] ease-out pt-[30px] pb-[80px] ${
              viewParaJumbotron ? "opacity-100 translate-x-0" : "opacity-0"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus nec enim at congue. Phasellus lacinia venenatis ipsum eu
            rhoncus. Aliquam viverra, justo ac dignissim pellentesque, mauris mi
            molestie
          </p>
        </div>
      </div>

      {/* panduan section */}
      <div className="py-[40px] bg-[#202020] relative">
        <img
          src={manusiaPanduan}
          alt=""
          className="absolute scale-55 right-[-55px] bottom-[-30px]"
        />

        <div
          ref={hPanduan}
          className={`w-fit block mx-auto duration-[2s] ease-out ${
            viewHPanduan ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`font-poppins text-[2.5rem] text-center md:leading-[60px] leading-[40px] !text-white`}
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
      <div className="text-black py-[30px]">
        <div>
          <h1 className="font-poppins text-[2rem] text-center md:leading-[60px] leading-[40px]">
            Kandidat
          </h1>
          <p className="text-center">
            berikut adalah beberapa kandidat pemilihan osis SMAN 24 bandung 2023
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] w-[85%] mx-auto py-[90px]">
          {/* kandidat 1 */}
          {candidate.map((e, index) => {
            return <CandidateCard key={index} data={e} />;
          })}
        </div>
      </div>

      {/* footer */}
      <FooterHomepage />
    </div>
  );
}

export default App;
