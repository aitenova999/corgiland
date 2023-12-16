import { Link } from "react-router-dom";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`dropdown ${
        dropdown ? "block" : "hidden"
      } bg-teal-500 rounded-md`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="pl-2 py-2 ">
          <Link
            className="py-2 mb-3 px-2 text-cyan-800 hover:text-white"
            to={submenu.url}
          >
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
