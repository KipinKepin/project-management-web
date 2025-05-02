import React, { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
import useProjectStore from "../store/projectStore";

const Home = () => {
  //   const user = useAuthStore((state) => state.user);
  const { fetchProjects, projects, loading, error } = useProjectStore();
  const { token } = useAuthStore();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    if (token) {
      fetchProjects();
    }
  }, [token, fetchProjects]);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p className="text-red-500 bg-red-300 rounded p-3">!{error}</p>}
      <div className="text-2xl font-bold">Active Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="p-4 bg-white rounded shadow hover:shadow-md transition"
              key={project.id}
              target="_blank"
            >
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-gray-500">{project.description}</p>
              <div className="mt-2 text-sm text-gray-400">
                {new Date(project.startDate).toLocaleDateString()} -{" "}
                {new Date(project.endDate).toLocaleDateString()}
              </div>
            </Link>
          ))
        ) : (
          <div>Tidak ada data</div>
        )}

        {/* <Link
          to={"/"}
          className="p-4 bg-white rounded shadow hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">Project Name</h2>
          <p className="text-gray-500">Project Description</p>
          <div className="mt-2 text-sm text-gray-400">
            {new Date().toLocaleDateString()} -{" "}
            {new Date().toLocaleDateString()}
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
