import React from "react";
import Button from "../components/Button";
import {
  Comet,
  Dancer,
  Dasher,
  Doner,
  Cupid,
  Prancy,
  Vixen,
  Rudolph,
} from "../assets/images/index";

const CurrentLitter = () => {
  return (
    <section id="/currentLitters">
      <h2 className=" flex justify-center my-6 font-playfair bold italic text-cyan-800 text-4xl ">
        Available puppies for adoption
      </h2>
      <div className="flex flex-1 justify-between  flex-wrap ">
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img
              src={Vixen}
              alt="Vixen-boy"
              width={"450px"}
              className="max-sm:flex justify-center"
            />

            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Vixen - boy
            </p>
          </div>
        </div>

        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img
              src={Dancer}
              alt="Dancer"
              width={"450px"}
              className="flex justify-center"
            />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Dancer - girl
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Comet} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Comet - boy
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Rudolph} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Rudolph - boy
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Doner} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Donner - boy
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Cupid} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Cupid - boy
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Dasher} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Dasher - boy
            </p>
          </div>
        </div>
        <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100 my-6">
          <div className="">
            <img src={Prancy} alt="Comet-boy" width={"450px"} />
            <p className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
              Prancy - girl
            </p>
          </div>
        </div>
      </div>
      <h3 className=" flex justify-center my-4 font-playfair bold italic text-cyan-800 text-3xl ">
        Please register for our waitlist
      </h3>
      <a
        className="flex justify-center"
        target="blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdADXBCsN0-wWt3L7nsvLITCURhRNc2J2l5Vh0et8f0PJYn4g/viewform?usp=sf_link"
      >
        <Button label="Adoption Application" />
      </a>
    </section>
  );
};

export default CurrentLitter;
