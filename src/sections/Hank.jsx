import React from "react";
import {
  Hank2,
  hank1,
  Margo2,
  Hank3,
  Hank4,
  Hank5,
  MargoHank,
} from "../assets/images";
import ImageHover from "../components/ImageHover";

const Hank = () => {
  return (
    <section id="/our-corgis" className="">
      <div>
        <h2 className=" flex justify-center my-2 font-playfair bold italic text-cyan-800 text-4xl ">
          Our Corgi Herd
        </h2>
      </div>
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="my-6">
          <img
            src={Hank2}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
            alt="Hank"
          />
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-4xl ">
            HANK aka "Mr.Hankie-Pankie"
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm px-4">
            Male AKC Registered Cardigan Welsh Blue Merle & White, w/tan points.
            Standard Coat
          </p>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm px-4">
            <p>
              <span className="font-bold">DNA</span>
            </p>
            <p>
              <span className="font-bold">DM:</span> Clear
            </p>
            <p>
              <span className="font-bold">EIC:</span> Clear
            </p>
            <p>
              <span className="font-bold">VWD1:</span> Clear
            </p>
            <p>
              <span className="font-bold">PRA-RCD3:</span> Clear
            </p>
            <span className="font-bold"> Fluffy Locus(Fluffy):</span> Carrier
            <p>
              <span className="font-bold">OFA certified CAER:</span> Normal
            </p>
            <p>
              <span className="font-bold">Hip Dysplasia:</span> Pending
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm px-4">
            Hank joined our family in August 2023. We found this gem in Troy,
            Montana. Hank traveled to us from MT to FL almost 2,800 miles. He is
            a true trooper. He is sweet and shy guy who likes to play, at times
            can be super goofy. Loves to gnaw a bone, and as soon he finishes
            with it he lays on it, on his back. Belly rubs is a must! Very
            unique Blue Merle look, and he is really calm little guy. We love
            him.
          </p>
        </div>
        <div>
          <img
            src={Hank3}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly pb-6 max-lg:flex-wrap">
        <div>
          <ImageHover src={Hank3} />
        </div>
        <div>
          <ImageHover src={Hank2} />
        </div>
        <div>
          <ImageHover src={Hank5} />
        </div>
        <div>
          <ImageHover src={MargoHank} />
        </div>
        <div>
          <ImageHover src={hank1} />
        </div>
      </div>
    </section>
  );
};

export default Hank;
