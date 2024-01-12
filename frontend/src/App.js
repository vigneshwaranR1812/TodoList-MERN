import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Screen/HomePage";
import SignUp from "./Component/SignUp";
import Auth from "./Screen/Auth";
import User from "./Screen/User";
import AllTask from "./Component/AllTask";
import Completed from "./Component/Completed";
import Due from "./Component/Due";
import DashBoard from "./Component/DashBoard";
import EditTask from "./Component/EditTask";
import CreateTask from "./Component/CreateTask";
import Login from "./Component/Login";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState("");
  const popup = () => {
    // Show the popup initially
    setShowPopup(true);

    // Automatically close the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/auth",
      element: (
        <Auth
          showPopup={showPopup}
          data={data}
          setData={setData}
          popup={popup}
        />
      ),
      children: [
        { path: "signup", element: <SignUp /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "/user",
      element: (
        <User
          showPopup={showPopup}
          data={data}
          setData={setData}
          popup={popup}
        />
      ),
      children: [
        { path: "due", element: <Due /> },
        { path: "completed", element: <Completed /> },
        { path: "alltask", element: <AllTask /> },
        { path: "dashboard", element: <DashBoard /> },
        { path: "createtask", element: <CreateTask /> },
        { path: "editTask/:taskId", element: <EditTask /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
