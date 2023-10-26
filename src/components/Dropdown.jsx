const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "block" : "hidden"}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className=" ">
          <a
            className="bg-cyan-200 rounded-md hover:bg-white py-2 mb-2 text-cyan-800 "
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
