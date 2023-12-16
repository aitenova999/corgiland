import React from "react";
import Button from "../components/Button";

const Waitlist = () => {
  return (
    <div>
      <h2 className=" flex justify-center my-6 mx-6 font-playfair bold  text-cyan-800 text-2xl ">
        Please join our waitlist{" "}
      </h2>
      <a
        className="flex justify-center"
        target="blank"
        href="https://docs.google.
        com/forms/d/e/1FAIpQLSdADXBCsN0-wWt3L7nsvLITCURhRNc2J2l5Vh0et8f0PJYn4g/viewform?usp=sf_link"
      >
        <Button label="Adoption Application" />
      </a>
    </div>
  );
};

export default Waitlist;
