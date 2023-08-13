import kandidat1 from "../assets/kandidat 1 (2).svg";
import kandidat2 from "../assets/kandidat 2 (2).svg";
import kandidat3 from "../assets/kandidat 3 (2).svg";
import hiasan1 from "../assets/elementBottomHeadlineKandidat.png";
import kiriAtas from "../assets/kiriAtas.png";
import kananAtas from "../assets/kananAtas.png";
import bawahKanan from "../assets/bawahKanan.png";
import bawahKiri from "../assets/bawahKiri.png";

const Kandidat = () => {
  return (
    <div className="text-black py-[200px] w-full relative">
      <img src={kiriAtas} className="absolute top-0 left-0" alt="" />
      <img src={kananAtas} className="absolute top-0 right-0" alt="" />
      <img src={bawahKanan} className="absolute bottom-0 right-0" alt="" />
      <img src={bawahKiri} className="absolute bottom-0 left-0" alt="" />
      <div>
        <h1 className="font-poppins text-[5rem] text-center md:leading-[60px] leading-[40px] opacity-75">
          Kandidat
        </h1>
        <img src={hiasan1} className="mx-auto scale-75" alt="" />
      </div>

      <div className="flex justify-center flex-wrap gap-[50px] gap-y-[15px] w-[85%] mx-auto py-[80px] scale-90">
        {/* kandidat 1 */}
        <img src={kandidat1} className="w-[45%]" alt="" />
        <img src={kandidat2} className="w-[45%]" alt="" />
        <img src={kandidat3} className="w-[45%]" alt="" />
      </div>
    </div>
  );
};

export default Kandidat;
