import React from "react";
import Button from "../components/Button";

const AdoptionCard = ({ imgURL, label, text, form }) => {
  return (
    <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-light-blue">
      <div className=" flex justify-center items-center rounded-md">
        <img
          src={imgURL}
          alt={label}
          width={300}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>
      <h3 className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {text}
      </p>
      <div className="flex justify-center pt-3">
        <a target="_blank" href={form}>
          <Button label="Apply" />
        </a>
      </div>
    </div>
  );
};

export default AdoptionCard;
