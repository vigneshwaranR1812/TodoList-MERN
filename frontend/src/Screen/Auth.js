// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Popup from "../Component/Popup";
// import Popup from "../Component/Popup";
const Auth = ({ showPopup, data, setData, popup }) => {
  //   const [showPopup, setShowPopup] = useState(false);

  //   const openPopup = () => setShowPopup(true);
  //   const closePopup = () => setShowPopup(false);
  return (
    <div className="w-[90%] m-auto flex h-screen">
      <div className="flex justify-center items-center h-auto ">
        {showPopup && <Popup message={data} />}
      </div>
      {/* Left side (Image) */}
      <div
        className="w-1/2  bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/Assets/Login.gif')" }}
      />
      {/* {showPopup && (
        <Popup message="This is a popup message!" onClose={closePopup} />
      )} */}
      {/* Right side (Login Form) */}
      <Outlet context={[popup, setData]} />
    </div>
    //   <Outlet />
  );
};

export default Auth;
