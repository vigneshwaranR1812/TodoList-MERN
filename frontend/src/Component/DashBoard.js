import React from "react";
import Card from "./Card";

const DashBoard = () => {
  return (
    <>
      {" "}
      <h1 className="text-center p-7 text-3xl">DashBoard</h1>
      <div className="w-[85%]  m-auto flex flex-wrap justify-center gap-4 p-4">
        {/* Large (lg) View: 4 Cards */}
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto p-4">
          {/* Card Content */}
          <Card />
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto  p-4">
          {/* Card Content */}
          <Card />
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto  p-4">
          {/* Card Content */}
          <Card />
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto  p-4">
          {/* Card Content */}
          <Card />
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto  p-4">
          {/* Card Content */}
          <Card />
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full m-auto  p-4">
          {/* Card Content */}
          <Card />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
