import React from "react";
import Button from "../components/Button";
import { hank1 } from "../assets/images";
import { group1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative top-4 w-full flex xl:flex-row max-sm:flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className=" xl:w-2/5 flex flex-col justify-center items-center w-full  max-xl:padding-x pt-2">
        <h1 className=" ml-8 font-playfair  text-cyan-800  text-4xl max-sm:text-[42px] max-sm:pt-10 max-sm:pl-4 max-sm:leading-[62px] font-bol ">
          Welcome to <br />
          <span className="font-playfair font-bold italic text-cyan-700   ">
            It Is Corgiland !
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ml-8 sm:max-w-sm">
          At <span className="font-bold">It Is Corgiland</span>, we're dedicated
          to sharing the joy of Cardigan Welsh Corgis with fellow dog lovers
          like you. Our furry family members are more than just pets; they're
          our passion and our pride. As responsible breeders, we've poured our
          hearts into raising these remarkable Corgis, known for their endearing
          personalities, intelligence, and, of course, those adorable ears! Our
          commitment to their well-being, health, and happiness is unwavering.
        </p>
        <a
          target="blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdADXBCsN0-wWt3L7nsvLITCURhRNc2J2l5Vh0et8f0PJYn4g/viewform?usp=sf_link"
        >
          <Button label="Adoption Application" />
        </a>
      </div>

      <div className="relative pt-12 flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-teal-100 bg-cover bg-center rounded-sm">
        <img
          src={group1}
          alt="main pic"
          width={450}
          height={400}
          className="object-contain  md:mt-14 z-10 drop-shadow-lg rounded-lg   "
        />
      </div>
    </section>
  );
};

export default Hero;
