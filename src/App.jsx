import "./App.css";
import glassx from "./assets/Block_Cross_2D_1_0001.png";
import glassTriangle from "./assets/Atom_Tetra_1_0002.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

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
    <div className="parent-elemeent w-full h-fit relative flex flex-col gap-[150px]">
      {/* navbar */}
      <NavBar display="login admin" route="login" />

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
        <div
          ref={hPanduan}
          className={`w-fit block mx-auto duration-[2s] ease-out ${
            viewHPanduan ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`font-poppins text-[2rem] text-center md:leading-[60px] leading-[40px] !text-white`}
          >
            Panduan
          </h1>
        </div>
        <p className="text-center text-white text-[.9rem]">
          berikut adalah cara menggunakan aplikasi ini dengan baik dan benar
        </p>

        <div className="flex gap-[50px] justify-center my-[80px] w-[80%] mx-auto">
          <div
            ref={panduan1}
            className={`container-panduan duration-[1s] ease-out ${
              viewPanduan1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="w-1/4 flex justify-center items-center !bg-slate-100 rounded-l-[5px]">
              <span className="material-symbols-outlined">shield_person</span>
            </div>
            <div className="p-panduan">
              <p>login super admin terlebih dahulu</p>
            </div>
          </div>
          <div
            ref={panduan2}
            className={`container-panduan duration-[1s] ease-out ${
              viewPanduan2
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="w-1/4 flex justify-center items-center !bg-slate-100 rounded-l-[5px]">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="p-panduan">
              <p>setiap siswa/i memasukan NIS pada halaman login siswa</p>
            </div>
          </div>
          <div
            ref={panduan3}
            className={`container-panduan duration-[1s] ease-out ${
              viewPanduan3
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
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
