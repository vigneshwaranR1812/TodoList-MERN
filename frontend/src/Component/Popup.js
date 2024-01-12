import React from "react";

function Popup({ message }) {
  return (
    <div className="fixed top-1/2 left-1/2 z-[9999] transform -translate-x-1/2 -translate-y-1/2 bg-second text-fifth bg-opacity-85 py-16 px-40 text-3xl shadow-md">
      <p>{message}</p>
    </div>
  );
}

export default Popup;
