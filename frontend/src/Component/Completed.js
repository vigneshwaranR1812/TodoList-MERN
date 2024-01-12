import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Completed = () => {
  const [allTask, getAllTask] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    async function fetchAllTask() {
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };
      const res = await axios.get(
        "http://localhost:5000/api/v1/task/getAllCompletedTask",
        {
          headers,
        }
      );
      console.log(res.data);
      getAllTask(res.data);
      return res.data;
    }
    fetchAllTask();
  }, []);
  return (
    <>
      {" "}
      <h1 className="text-center p-7 text-3xl">Completed Tasks</h1>
      <div className="w-[85%]  m-auto flex flex-wrap justify-center gap-4 p-4">
        {allTask.length === 0 ? (
          <h1 className="text-center mt-10 text-2xl">No Task completed!</h1>
        ) : (
          allTask.map((task) => {
            return (
              <div
                className="lg:w-1/4 md:w-1/2 sm:w-full m-auto p-4"
                key={task._id}
              >
                {/* Card Content */}
                <Card
                  id={task._id}
                  name={task.name}
                  desc={task.description}
                  deadLine={task.deadLineTime}
                  completedTime={task.completedTime}
                  createdAt={task.createdAt}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Completed;
