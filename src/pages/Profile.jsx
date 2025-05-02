import React, { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";

const Profile = () => {
  const token = useAuthStore((state) => state.token);
  const getMe = useAuthStore((state) => state.getMe);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    getMe();
  });

  console.log(token);

  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <p className="mt-1 text-lg">{user.user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-lg">{user.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
