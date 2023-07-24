import fotoKandidat1 from "../assets/download.jpeg"


const CandidateCard = (props) => {
    const {nama, kelas, visi, foto} = props.data
    return (
        <div className="w-[45%] flex rounded-[5px] h-[250px] shadow-2xl">
            <div className="gambar-kandidat w-[30%] bg-center rounded-l-[5px]" style={{backgroundImage: `url(${foto})`}}>
            </div>
            <div className="flex flex-col w-[65%] bg-white">
              <div><h3 className="font-bold font-roboto text-[2rem] px-[10px] pt-[15px] leading-4">{nama} <br /><span className="font-normal opacity-50 text-[.8rem]">{kelas}</span></h3></div>
              <div className="flex mt-[15px]">
                <div className="w-1/2 text-center cursor-pointer active-nav-kandidat border-r-[1px] border-solid border-black border-opacity-30">visi</div>
                <div className="w-1/2 text-center cursor-pointer">misi</div>
              </div>
              <div className="px-[10px] text-[.8rem] text-slate-900 py-[15px]">
                <p>{visi}</p>
              </div>
            </div>
          </div>
    );
}

export default CandidateCard;
