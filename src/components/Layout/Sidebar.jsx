import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Sidebar = () => {
  const navigate = useNavigate();

  const logOut = useAuthStore((state) => state.logOut);

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl border-b">Project Manager</div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link to={"/"} className="hover:bg-gray-100 p-2 rounded">
            Dashboard
          </Link>
          <Link to={"/profile"} className="hover:bg-gray-100 p-2 rounded">
            Profile
          </Link>
          <button
            className="hover:bg-gray-100 p-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
