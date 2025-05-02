import React, { useEffect } from "react";
import useProjectStore from "../store/projectStore";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { fetchProjectDetail, projectDetail, loading, error } =
    useProjectStore();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      fetchProjectDetail(projectId);
    }
  }, [projectId, fetchProjectDetail]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!projectDetail) return <p>No project found.</p>;

  console.log(projectDetail);

  return (
    <div className="p-6 bg-white rounded shadow space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">{projectDetail.name}</h1>
        <div className="text-gray-600 mb-2">
          <strong>Status:</strong>{" "}
          <span
            className={`${
              projectDetail.status == "active"
                ? "text-blue-600 bg-blue-300 px-1 rounded"
                : projectDetail.status == "on_hold"
                ? "text-yellow-600 bg-yellow-300 px-1 rounded"
                : projectDetail.status == "completed"
                ? "text-green-600 bg-green-300 px-1 rounded"
                : ""
            }`}
          >
            {projectDetail.status}
          </span>
        </div>
        <div className="text-gray-600 mb-2">
          <strong>Duration:</strong>{" "}
          {new Date(projectDetail.startDate).toLocaleDateString()} -{" "}
          {new Date(projectDetail.endDate).toLocaleDateString()} (
          {Math.round(
            new Date(projectDetail.endDate) - new Date(projectDetail.startDate)
          ) / 86400000}{" "}
          days)
        </div>
        <div className="text-gray-600 mb-2">
          <strong>Description:</strong> {projectDetail.description}
        </div>
        <div className="text-gray-600 mb-2">
          <strong>Created by:</strong> {projectDetail.createdBy.name} (
          {projectDetail.createdBy.email})
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
