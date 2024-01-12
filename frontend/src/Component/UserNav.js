import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-fourth p-4 flex justify-between items-center max-sm:block px-5">
      <div className="text-first text-lg font-bold md:ml-[10%]">
        Hello! User
      </div>
      <div className="flex space-x-4 lg:space-x-8 max-sm:block md:mr-[10%]">
        <ul className="flex justify-end max-sm:block  max-sm:text-center ">
          <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/user/createtask"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              Create
            </Link>
          </li>
          <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/user/alltask"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              All Task
            </Link>
          </li>
          <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/user/completed"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              Completed
            </Link>
          </li>
          <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/user/due"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              Due
            </Link>
          </li>
          {/* <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/user/dashboard"
              className="text-first  md:hover:bg-second rounded-full md:hover:text-fifth px-4 py-2 transition-all duration-400 ease-in-out"
            >
              Dashboard
            </Link>
          </li> */}
          <li className="max-sm:m-4 max-sm:text-xl">
            <Link
              to="/auth/login"
              onClick={() => {
                localStorage.removeItem("userData");
                console.log(JSON.parse(localStorage.getItem("userData")));
                navigate("/auth/login");
              }}
              className="text-first md:hover:bg-second rounded-full px-4 py-2 md:hover:text-fifth transition-all duration-400 ease-in-out"
            >
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
