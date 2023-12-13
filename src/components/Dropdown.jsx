const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`dropdown ${
        dropdown ? "block" : "hidden"
      } bg-teal-300 rounded-md`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="pl-2 py-2 ">
          <a
            className="py-2 mb-3 px-2 text-cyan-800 hover:text-white"
            href={submenu.url}
          >
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
