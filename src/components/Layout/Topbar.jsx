import React, { useEffect } from "react";
import useAuthStore from "../../store/authStore";

const Topbar = () => {
  const user = useAuthStore((state) => state.user);
  const getMe = useAuthStore((state) => state.getMe);

  useEffect(() => {
    getMe();
  }, [getMe]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Dashboard</div>
        <div className="text-lg font-semibold text-red-500 hover:bg-slate-400 p-3 hover:rounded-md hover:text-white hover:cursor-pointer">
          {user.user.name}
        </div>
      </header>
    </div>
  );
};

export default Topbar;
