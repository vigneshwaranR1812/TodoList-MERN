import React from "react";
import HomeNav from "../Component/HomeNav";

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <div className="w-full mt-5">
        <div className="max-sm:hidden flex justify-center items-center">
          <img src="Assets/Main.gif" alt="" />
        </div>
        <div className="max-sm:hidden flex justify-center items-center">
          <h1 className="text-7xl text-fifth">Todo List Creator</h1>
        </div>
        <p className="italic text-fifth m-auto text-center w-[50%] mt-5 text-2xl">
          "Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work." -
          Steve Jobs
        </p>
      </div>
    </>
  );
};

export default HomePage;
