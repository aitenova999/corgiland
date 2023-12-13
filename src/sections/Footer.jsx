import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/telegram";
import logo from "../assets/icons/logo-new.png";

const Footer = () => {
  return (
    <section className="flex w-full justify-between bg-teal-200 p-6 px-8">
      <div className="flex justify-start ">
        <div className="flex justify-start">
          <img src={logo} alt="logo" width={140} height={140} />
          <p className="flex justify-center items-center  my-4 ml-4 font-playfair bold text-cyan-800 text-2xl max-sm:hidden max-lg: max-sm:leading-[42px] ">
            It Is Corgiland
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="icon">
          <SocialIcon
            url="https://www.instagram.com/p/CyMI4sGuTXL/?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          />
        </div>
        <div className="">
          <SocialIcon
            url="https://www.facebook.com/itscorgiland?mibextid=LQQJ4d"
            target="_blank"
          />
        </div>
        <div className="icon">
          <SocialIcon url="www.telegram.com/@itiscorgiland" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
