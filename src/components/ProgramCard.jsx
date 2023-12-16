import React from "react";

const ProgramCard = ({ title, text1, text2 }) => {
  return (
    <div className="flex-2 sm:w-[350px] sm:min-w-[450px] w-full rounded-[20px] shadow-3xl px-6 py-8 bg-teal-100">
      <h3 className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal font-bold text-cyan-900">
        {title}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {text1}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {text2}
      </p>
    </div>
  );
};

export default ProgramCard;
