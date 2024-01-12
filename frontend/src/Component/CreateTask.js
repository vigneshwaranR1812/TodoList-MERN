import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [popup, setData] = useOutletContext();

  const createTask = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("userData")).token;
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    const res = await axios.post(
      "http://localhost:5000/api/v1/task/createTask",
      {
        name: name,
        description: description,
        deadLineTime: date,
        completedTime: null,
        status: "active",
      },
      { headers }
    );
    console.log(res.data.msg);
    setData(res.data.msg);
    popup();
    navigate("/user/alltask");
  };
  return (
    <div className="md:w-[60%] w-[90%] m-auto flex justify-center items-center">
      <div className="bg-third opacity-90 p-8 rounded-lg shadow-md w-[100%] m-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Create Task</h2>
        <form className="text-left" autoComplete="off" onSubmit={createTask}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md p-2"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="w-full border rounded-md p-2"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="w-full border rounded-md p-2"
              min={new Date().toJSON().slice(0, 10)}
              required
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-fourth text-first py-2 px-4 rounded-full"
            >
              Create
            </button>
            <button
              type="button"
              className="bg-fifth  py-2 px-4 ml-3 rounded-full text-third"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
