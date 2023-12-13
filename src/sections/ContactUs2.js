import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/telegram";
//import "react-social-icons/whatsup";
import corgi from "../assets/icons/corgi.png";

const ContactUs2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zv7zbl2",
        "template_yp79wmp",
        form.current,
        "MWS9I25-Z_ILAM3MP"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message was sent!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full flex xl:flex-row max-sm:flex-col justify-center min-h-screen gap-10 max-container">
      <div className="flex flex-1 justify-center flex-col px-4 ml-4">
        <h2 className="flex justify-start mt-4 mb-8 ml-8 font-playfair bold text-cyan-800 text-4xl max-sm:text-[52px] max-sm:leading-[62px] font-bold">
          Contact Us
        </h2>
        <h3 className="flex justify-start mt-4 mb-8 ml-8 font-playfair bold text-cyan-800 text-3xl max-sm:text-[52px] max-sm:leading-[62px] font-bold">
          Send message
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col border-solid rounded-md bg-teal-100 font-playfair bold text-cyan-800 text-lg py-4 px-4 max-w-md"
        >
          <label className="py-3 px-3">Name</label>
          <input
            type="text"
            name="user_name"
            className="py-2 px-2 rounded-md"
          />
          <label className="py-3 px-3">Email</label>
          <input
            type="email"
            name="user_email"
            className="py-2 px-2 rounded-md"
          />
          <label className="py-3 px-3">Message</label>
          <textarea name="message" cols="30" rows="6" />
          <input className="py-4 px-4 rounded-md" type="submit" value="Send" />
        </form>
      </div>
      <div className="flex flex-1 justify-center flex-col px-4 ml-4">
        {/* <h3 className="flex justify-center mt-8 mb-8 ml-2 font-playfair bold text-cyan-800 text-3xl max-sm:text-[52px] max-sm:leading-[62px] font-bold">
          Connect with us
        </h3>
        <div className="flex justify-around">
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
          {/* <div className="icon">
            <SocialIcon url="www.whatsup.com" />
          </div> */}

        <div className="flex flex-1 justify-center items-start flex-col px-4 ml-4 max-lg:ml-2">
          <h2 className="flex justify-center mt-10 mb-8 ml-2 font-playfair bold text-cyan-800 text-2xl max-sm:text-[42px] max-sm:leading-[42px] ">
            Please feel free to write us if you have any questions
          </h2>
          <p className="flex justify-center  my-4 ml-2 font-playfair bold text-cyan-600 text-2xl max-sm:text-[32px] max-sm:leading-[42px]  ">
            ItIsCorgiland@gmail.com
          </p>
          <p className="flex justify-center my-4 ml-2 font-playfair bold text-cyan-600 text-2xl max-sm:text-[42px] max-sm:leading-[42px] ">
            (407) 883-1014
          </p>
          <div className="flex items-center ml-6 mt-8">
            <img src={corgi} alt="corgi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs2;
