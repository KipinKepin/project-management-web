import React from "react";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
