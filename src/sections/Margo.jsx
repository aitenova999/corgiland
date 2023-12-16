import React from "react";
import {
  margo1,
  hank1,
  Margo2,
  Margo3,
  Margo4,
  Margo5,
  Margo6,
  MargoHank,
} from "../assets/images";
import ImageHover from "../components/ImageHover";

const Margo = () => {
  return (
    <section id="/our-corgis" className="">
      <div>
        <h2 className=" flex justify-center my-2 font-playfair bold italic text-cyan-800 text-4xl ">
          Our Corgi Herd
        </h2>
      </div>
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="my-6 max-lg:flex justify-center">
          <img
            src={Margo2}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-4xl ">
            Margo aka "Margosha”
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm px-4">
            Female AKC Registered Cardigan Welsh Corgi Black & White, w/ brindle
            points Standard Coat
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
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm px-4"></p>
        </div>
      </div>
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm px-4">
            Margo joined our family in August, 2023. She also come from Troy,
            Montana. She has been a companion to our Mr. Hankie-Pankie during
            the long travel. Margosha is outgoing, happy little girl. She likes
            to play, run and do different commands such as sit, stay, and come.
            Much more to learn for possible competitions in future. Absolutely
            loves belly rubs and sleeps on her back with paws hanging in air. A
            lot of personality in such little body. We fell in love with her
            right away
          </p>
        </div>
        <div className="max-lg:flex justify-center mb-4">
          <img
            src={Margo3}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly pb-6 max-lg:flex-wrap">
        <div>
          <ImageHover src={Margo3} />
        </div>
        <div>
          <ImageHover src={Margo4} />
        </div>
        <div>
          <ImageHover src={Margo5} />
        </div>
        <div>
          <ImageHover src={MargoHank} />
        </div>
        <div>
          <ImageHover src={Margo6} />
        </div>
      </div>
    </section>
  );
};

export default Margo;
