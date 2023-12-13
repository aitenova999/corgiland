import React from "react";
import { margo1, aboutMe, Nastya, Sasha } from "../assets/images";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="  sm:flex-col-reverse justify-center"
      //   className="bg-[#8af9e3]"
      //   className="flex justify-between  max-lg:flex-col gap-10 w-full max-container"
    >
      {/* <div className="relative flex-1 flex justify-center items-center object-left-top xl:min-h-screen max-xl:py-40 bg-cover bg-center min-h-screen"> */}
      <div className=" relative top-4 flex flex-1 justify-around gap-10 max-lg:flex-col-reverse bg-gradient-to-r from-teal-100 to-cyan-200 ">
        {/* <div className="relative pt-12 flex-1 w-1/2 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-teal-100 bg-cover bg-center rounded-sm"> */}
        <div
          className=" rleative  mt-8 max-sm:flex items-center justify-center 
      "
        >
          <img
            src={Nastya}
            width={450}
            height={500}
            className="rounded-md shadow-lg"
          />
        </div>

        <div>
          <div className="flex flex-1 justify-center   flex-col px-4 ml-4 ">
            <h3 className="mt-10 selection: font-playfair bold italic text-cyan-800  text-4xl max-sm:text-[42px] max-sm:leading-[82px] font-bold max-sm:flex justify-center">
              About Us
            </h3>
          </div>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm px-4">
            Hello My Name Is Anastasia. My Family And I Are In Central Florida.
            I Have Always Loved The Cardigan Welsh Corgi Breed And In August
            2023 My Dream Came True. I Have Found The Perfect Match Hank And
            Margo Who Have Relocated From Montana To Sunny Florida. My Dogs Are
            A Huge Part Of Our Family, They Have A Lot Of Personality And Are
            Very Playful, Which Keeps Me On My Toes. We Take Pride In Ethical
            Breeding Of Vulnerable Cardigan Welsh Corgis; We Do Make Sure Our
            Dogs Are DNA Tested, AKC Registered And Have Great Pedigree.
          </p>
        </div>
      </div>
      <div className=" relative top-8 flex flex-1 justify-around gap-10 max-lg:flex-col  bg-gradient-to-r from-teal-100 to-cyan-200">
        <div>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-10 mb-14 sm:max-w-sm px-4">
            I’m Sr. Payroll Specialist Who Decided To Devote Extra Time To
            Breeding And Producing Quality Puppies. I Have A Master’s Degree In
            Human Resource Management Track From The University Of Central
            Florida (2021). I’ve Been Working In HR World For About 8 Years. And
            Now, My New Passion Is Cardigan Welsh Corgis. I Have A Son Rigels
            Who Is Helping Me With The Dogs And My New Venture. My Goal Is To
            Produce Unique, Healthy, And Happy Corgis.
          </p>
        </div>
        <div
          className=" rleative items-center py-8 max-sm:flex  justify-center
      "
        >
          <img
            src={Sasha}
            width={400}
            height={420}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
