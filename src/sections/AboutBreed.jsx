import React from "react";
import { MargoHank2, MargoHank } from "../assets/images";

const AboutBreed = () => {
  return (
    <section id="about-breed">
      <div className="flex flex-row justify-around relative mt-10 max-lg:flex-col">
        <div className="my-6">
          <img
            src={MargoHank2}
            width={550}
            height={600}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-4xl ">
            Summary of Corgi Facts:
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Types:</span> Cardigan Welsh Corgi,
            Pembroke Welsh Corgi
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-4 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Height:</span> 10 to 12 inches
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-4 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Weight:</span> 24 to 30 Ibs.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-4 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Coat Length:</span> Short or Long
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Color:</span> Sable, fawn, red, merle,
            black, and tan with white markings and the legs, chest, neck, and
            part of the muzzle.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10 max-lg:flex-col">
        <div className="">
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Eyes and Nose: </span> dark brown,
            black, blue or/and pink nose if merely genes present.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Ears: </span> erect ears; large and
            tapered to a rounded point
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Tail: </span> docked if Pembrook pup,
            present if Cardigan pup.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Temperament: </span> friendly, loyal,
            good with children, active
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Other Pets: </span> strong herding
            instincts; may not be good with small household pets. Corgis
            generally are good with other dogs if properly socialized and
            trained.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Training: </span> intelligent and very
            trainable
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Exercise needs: </span> a very active,
            prolonged daily walk is strongly recommended.
          </p>
        </div>
        <div>
          <img
            src={MargoHank}
            width={480}
            height={550}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around relative mt-10 max-lg:flex-col">
        <div className="my-6">
          <img
            src={MargoHank2}
            width={550}
            height={600}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
        </div>
        <div>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Health Conditions: </span> generally,
            Corgis are a healthy breed. However, there are hereditary diseases
            that Corgis might develop in life span such as progressive retinal
            atrophy, canine degenerative, myelopathy, von Willebrand’s disease.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-4 mt-6  sm:max-w-sm px-1">
            <span className="font-bold">Lifespan:</span> average 12 to 15 years
          </p>
          <p className="font-montserrat font-bold text-cyan-800 text-lg leading-6 mt-6  sm:max-w-sm px-1">
            If you have additional questions about Corgi Breed, please reach out
            to us by submitting message below:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBreed;
