import React from "react";
import { MargoHank } from "../assets/images";

const UpcomingLitters = () => {
  return (
    <section id="/upcomingLitters">
      <div>
        <h2 className=" flex justify-center my-4 font-playfair bold italic text-cyan-800 text-4xl ">
          Upcoming Litters
        </h2>
      </div>
      <div className="flex flex-row  justify-around max-lg:flex-col items-center ">
        <div className="my-6 ">
          <h2 className=" flex justify-center my-6 font-playfair bold  text-cyan-800 text-3xl ">
            {" "}
            Margo & Hank due December 23rd!!!
          </h2>
          <img
            src={MargoHank}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-3xl ">
            From this pair we expect...
          </h2>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLitters;
