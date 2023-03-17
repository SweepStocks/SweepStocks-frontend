import { useState } from "react";
import { navLinks } from "src/constants";

const Header = () => {
  const [active, setActive] = useState("Home");

  // just a random logo

  return (
    <nav className="flex w-full border-b border-gray-500 h-[80px] px-10">
      <img
        className="w-[140px] h-full"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhXXi-2NMVgK9qenpFUpEe4r8eYqr1W8G8A&usqp=CAU"
      />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 px-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-stone-500"
                : "text-stone-300"
            } ${
              index === navLinks.length - 1 ? "mr-0" : "mr-[30px]"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center w-[400px]">
        <button className="w-[140px] h-[40px] border-2 border-white rounded-md">
          Connect wallet
        </button>
      </div>
    </nav>
  );
};

export default Header;
