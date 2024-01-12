import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhonenumber] = useState(0);
  const [popup, setData] = useOutletContext();
  useEffect(() => {
    if (localStorage.getItem("userData")) navigate("/user/allTask");
  }, []);
  const headers = {
    "Content-Type": "application/json",
    //   Authorization: "JWT fefege...",
  };
  const signupUser = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      name: name,
      role: "user",
    };
    console.log(body);
    const res = await axios.post(
      "http://localhost:5000/api/v1/user/signUp",

      {
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        name: name,
        role: "user",
      },
      headers
    );
    console.log(res.data.msg);
    setData(res.data.msg);
    popup();
    localStorage.setItem("userData", JSON.stringify(res.data));
    navigate("/user/alltask");
    console.log(res);
  };

  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className="bg-first opacity-90 p-8 rounded-lg shadow-md w-[90%] m-auto">
        <h2 className="text-2xl font-bold mb-6">SignUp</h2>
        <form autoComplete="off" onSubmit={signupUser}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md p-2 text-fourth"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border rounded-md p-2 text-fourth"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md p-2 text-fourth"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-fourth text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full border rounded-md p-2 text-fourth"
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="bg-fourth text-first py-2 px-4 rounded-full"
            >
              SignUp
            </button>
            <Link
              type="button"
              to="/auth/login"
              className="bg-fifth  py-2 px-4 ml-3 rounded-full text-third"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
