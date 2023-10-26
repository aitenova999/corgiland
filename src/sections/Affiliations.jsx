import React from "react";
import img2 from "../assets/icons/img2.webp";
import img3 from "../assets/icons/img3.webp";
import img4 from "../assets/icons/img4.webp";
import img5 from "../assets/icons/img5.webp";
import img6 from "../assets/icons/img6.webp";
import gooddog from "../assets/icons/gooddog.png";

const Affiliations = () => {
  return (
    <section
      id="#affiliations"
      className="max-container mt-4 max-sm:mt-12  py-4"
    >
      <div className="flex justify-center">
        <h2 className="text-3xl font-epilogue italic font-bold text-sky-950 ">
          Our Affliations
        </h2>
      </div>
      <div className="flex flex-wrap justify-between gap-3 py-6">
        <div className="bg-[#c8a4da] rounded-lg flex items-center py-4 px-4 hover:bg-slate-50">
          <a
            href="https://www.gooddog.com/breeders/corgiland-florida"
            target="_blank"
          >
            <img src={gooddog} width={180} height={180} />
          </a>
        </div>{" "}
        <div className="bg-[#c8a4da] rounded-lg flex items-center py-4 px-4 hover:bg-slate-50">
          <img src={img3} width={180} />
        </div>
        <div className="bg-[#c8a4da] rounded-lg flex items-center py-4 px-4 hover:bg-slate-50">
          <img src={img4} width={180} />
        </div>
        <div className="bg-[#c8a4da] rounded-lg flex items-center py-4 px-4 hover:bg-slate-50">
          <img src={img5} width={180} />
        </div>
        <div className="bg-[#c8a4da] rounded-lg flex items-center py-4 px-4 hover:bg-slate-50">
          <img src={img6} width={180} />
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
