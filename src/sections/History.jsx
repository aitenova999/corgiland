import React from "react";
import { Hank7, Margo5 } from "../assets/images";

const History = () => {
  return (
    <section id="history">
      <div className="flex flex-row justify-around relative mt-10 max-lg:flex-col">
        <div>
          <img
            src={Hank7}
            width={550}
            height={600}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-4xl ">
            A Brief History
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6  sm:max-w-sm px-1">
            A small but hardy dog was found centuries ago in the remote, misty
            green hills of Cardiganshire in Wales. He was a “Corgi”, “Cor” for
            dwarf and “gi” for dog. This “yard-long” dog was highly valued by
            his family as affectionate companion, guard, general farm worker,
            and driver of cattle. In fact, ancient Welsh law provided for severe
            penalties to those who harmed or stole of the little “corgwn”,
            because the corgi’s talents could help determine his family’s
            economic status.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6  sm:max-w-sm px-1">
            Never numerous and sometimes confused with the more common tailless
            Pembroke Welsh Corgi, the Cardigan is a separate breed of ancient
            lineage, descended from the Teckel or Dachshund family.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10 max-lg:flex-col">
        <div className="">
          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6  sm:max-w-sm px-1">
            The earliest Cardigans were heavy, golden or blue merle with perhaps
            drop ears. Careful crosses were made with working qualities in mind,
            probably with brindle and red herders; the result was also more
            refined, dignified and foxy-looking.
          </p>

          <p className="font-montserrat bold text-slate-gray text-lg leading-8 mt-6  sm:max-w-sm px-1">
            Although the Cardigan Welsh Corgi was first shown in English in 1919
            and the English Cardigan Welsh Corgi Associated was founded in 1926,
            the Cardigans and Pembrokes were not finally declared to be separate
            breeds by the English Kennel Club until 1934, and the Cardigan and
            Pembroke Welsh Corgis recognized separately in December, 1934. The
            Cardigan Welsh Corgi Club of America was founded in 1935. The
            Cardigan has gone from the Non- Sporting to the Working to the
            Herding group.
          </p>
        </div>
        <div>
          <img
            src={Margo5}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
