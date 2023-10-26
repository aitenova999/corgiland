import { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="relative">
      {items.submenu ? (
        <>
          <button
            type="button"
            className="flex justify-center  bg-transparent cursor hover:bg-slate-300 rounded-md text-center p-3"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>

          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="hover:bg-slate-300 rounded-lg" href={items.url}>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
