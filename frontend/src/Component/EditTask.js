import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const EditTask = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);
  const [completedTime, setCompletedTime] = useState(null);
  const { taskId } = useParams();
  const [popup, setData] = useOutletContext();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    async function fetchAllTask() {
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };
      const res = await axios.get(
        `http://localhost:5000/api/v1/task/getTaskById/${taskId}`,
        {
          headers,
        }
      );
      const data = res.data;
      console.log(data);
      setName(data.name);
      setDescription(data.description);
      setDate(data.deadLineTime);
      if (data.completedTime !== null) {
        setCompleted(true);

        setCompletedTime(data.completedTime);
      } else setCompleted(false);

      return res.data;
    }
    fetchAllTask();
  }, []);
  const editTask = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("userData")).token;
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    const res = await axios.post(
      "http://localhost:5000/api/v1/task/updateTask",
      {
        id: taskId,
        name: name,
        description: description,
        deadLineTime: date,
        completedTime: completedTime,
        status: "active",
      },
      { headers }
    );
    console.log({
      name: name,
      description: description,
      deadLineTime: date,
      completedTime: completedTime,
      status: "active",
    });
    console.log(res.data.msg);
    setData(res.data.msg);
    popup();
    navigate("/user/alltask");
  };

  return (
    <div className="md:w-[60%] w-[90%] m-auto flex justify-center items-center">
      <div className="bg-third opacity-90 p-8 rounded-lg shadow-md w-[100%] m-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Edit Task</h2>
        <form className="text-left" autoComplete="off" onSubmit={editTask}>
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full border rounded-md p-2"
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
              value={description}
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
              value={new Date(date).toISOString().split(".")[0].split("T")[0]}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4 flex justify-start text-right items-center">
            <input
              type="checkbox"
              id="completed"
              name="completed"
              checked={completed}
              className="border rounded-md p-6 w-7 h-7"
              required
              onChange={(e) => {
                console.log(completed);
                setCompleted(!completed);
                if (completed) {
                  setCompletedTime(new Date());
                } else {
                  setCompletedTime(null);
                }
              }}
            />
            <label
              htmlFor="completed"
              className="ml-3 mt-2 text-fourth text-sm font-bold mb-2"
            >
              Completed.{" "}
            </label>
            {setCompletedTime && (
              <p className="ml-2">
                <b>Completed On + {new Date(completedTime).toDateString()}</b>
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-fourth text-first py-2 px-4 rounded-full"
            >
              Edit
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

export default EditTask;
