import UserNav from "../Component/UserNav";
// import Card from "../Component/Card";
import { Outlet } from "react-router-dom";
import Popup from "../Component/Popup";

const User = ({ showPopup, data, setData, popup }) => {
  return (
    <>
      <UserNav />
      <div className="text-center min-h-[93.5vh] sm:min-h[85vh] bg-first opacity-95">
        <div className="flex justify-center items-center h-auto ">
          {showPopup && <Popup message={data} />}
        </div>
        <Outlet context={[popup, setData]} />
      </div>
    </>
  );
};

export default User;
