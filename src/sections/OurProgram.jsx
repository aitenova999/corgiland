import React from "react";
import ProgramCard from "../components/ProgramCard";
import { puppyProgram } from "../constants";
import Connect from "../components/Connect";

const OurProgram = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-7 pt-6 pb-6 ">
      <div>
        <h2 className=" flex justify-center my-4 font-playfair bold italic text-cyan-800 text-4xl ">
          How we raise our puppies program
        </h2>
        <p className=" flex justify-center my-6 mx-6 font-playfair bold  text-cyan-800 text-2xl ">
          We’re proud to outline our commitment and the services we provide at
          It Is Corgiland. Our mission revolves around the well-being and
          happiness of our Cardigan Welsh Corgis. Here’s what we do:
        </p>
      </div>

      {puppyProgram.map((item) => (
        <ProgramCard key={item.title} {...item} />
      ))}
    </section>
  );
};

export default OurProgram;
