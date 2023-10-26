import { useState } from "react";
import logo from "../assets/icons/logo-corgi-rounded 1.png";
import { menuItems } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";
import { RiCloseLine } from "react-icons/ri";
import MenuItems from "./MenuItems";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/telegram";
//import "react-social-icons/whatsup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className=" relative padding-x  py-4 mb-8  z-10 w-full bg-teal-medium max-sm:flex flex-row ">
      <nav className="flex justify-between gap-3 items-center max-container">
        <div className="flex items-start">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              width={130}
              height={130}
              className="rounded-full max-sm:hidden"
            />
          </a>
          {/* <div className="flex justify-between gap-3 "> */}
          <div className="flex justify-center sm:relative sticky top-0 gap-3 max-sm:items-start">
            <div className="icon">
              <SocialIcon
                url="https://www.instagram.com/p/CyMI4sGuTXL/?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              />
            </div>
            <div className="">
              <SocialIcon url="www.facebook.com" />
            </div>
            <div className="icon">
              <SocialIcon url="www.telegram.com" />
            </div>
            {/* <div className="icon">
              <SocialIcon url="www.whatsup.com" />
            </div> */}
          </div>
        </div>
        <ul className="flex  items-center gap-16 max-lg:hidden max-sm: justify-end align-center">
          {menuItems.map((menu, index) => {
            return (
              <li className="font-montserrat leading-normal text-lg text-white">
                <MenuItems items={menu} key={index} />
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block max-sm:flex justify-end align-top">
          {toggleMenu ? (
            <RiCloseLine
              color="black"
              size={25}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div>
              <div>
                <ul className="flex flex-col  text-right pl-4">
                  {menuItems.map((item) => (
                    // <li key={item.title}>
                    //   <Link to={item.url}

                    //     className="font-montserrat leading-normal text-lg text-slate-500"
                    //   >
                    //     {item.title}
                    //   </Link>
                    // </li
                    <li className="flex flex-col justify-center text-left p-2">
                      <MenuItems items={item} key={item.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
