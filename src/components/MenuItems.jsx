import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <li className="flex justify-start ml-0" ref={dropdownRef}>
      {items.submenu ? (
        <>
          <button
            type="button"
            className="flex justify-end  bg-transparent cursor hover:text-slate-300 rounded-md text-center p-0"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>

          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="hover:text-slate-300 rounded-lg" href={items.url}>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
