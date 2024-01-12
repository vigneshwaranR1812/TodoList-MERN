import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, desc, deadLine, completedTime, createdAt }) => {
  return (
    <div className="max-w-sm h-[27vh] bg-third border rounded-md overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
      <div className="px-6 py-4">
        {/* Header */}
        <div className="font-bold text-xl mb-2">{name}</div>

        {/* Description */}
        <p className="text-gray-700 text-base">
          {desc.substring(0, 20)}{" "}
          <Link className="text-fourth hover:text-first" to={"/task/" + id}>
            ...more
          </Link>
        </p>
        <p className="text-gray-700 text-base">
          <b> Created on:</b>
          {"  " + new Date(createdAt).toDateString()}
        </p>
        <p className="text-gray-700 text-base">
          <b>DeadLine:</b>
          {"  " + new Date(deadLine).toDateString()}
        </p>

        <p className="text-gray-700 text-base">
          <b>Completed on:</b>
          {completedTime
            ? "  " + new Date(completedTime).toDateString()
            : "Not Completed Yet"}
        </p>
      </div>

      {/* Buttons */}
      <div className="px-6 py-4 flex justify-around">
        <Link
          to={"/user/editTask/" + id}
          className="bg-fourth hover:bg-second text-second hover:text-fourth rounded-full py-2 px-4  focus:outline-none focus:shadow-outline-blue"
        >
          Edit
        </Link>
        <button
          onClick={async () => {
            const token = JSON.parse(localStorage.getItem("userData")).token;
            const headers = {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            };
            await axios.delete(
              `http://localhost:5000/api/v1/task/deleteTask/${id}`,
              {
                headers,
              }
            );
            window.location.reload();
          }}
          className="bg-second hover:bg-fifth text-fifth hover:text-first py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline-red"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
