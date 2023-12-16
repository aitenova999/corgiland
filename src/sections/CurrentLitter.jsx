import React from "react";
import Button from "../components/Button";

const CurrentLitter = () => {
  return (
    <section id="/currentLitters">
      <h2 className=" flex justify-center my-4 font-playfair bold italic text-cyan-800 text-4xl ">
        We are posting our available puppies shortly ...
      </h2>
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
