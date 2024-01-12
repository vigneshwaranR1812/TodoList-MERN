import React from "react";

const HomeNav = () => {
  return (
    <nav className="bg-fourth p-4 flex justify-between items-center max-sm:block px-5">
      <div className="text-first text-lg font-bold md:ml-[10%]">Todo</div>
      <div className="flex space-x-4 lg:space-x-8 max-sm:block md:mr-[10%]">
        <ul className="flex justify-end max-sm:block  max-sm:text-center ">
          <li className="max-sm:m-4 max-sm:text-xl">
            <a
              href="/login"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              Login
            </a>
          </li>
          <li className="max-sm:m-4 max-sm:text-xl">
            <a
              href="/signup"
              className="text-first md:hover:bg-second rounded-full px-4 py-2 md:hover:text-fifth transition-all duration-400 ease-in-out"
            >
              SignUp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNav;
