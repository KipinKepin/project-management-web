import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";
import ProjectDetail from "../pages/ProjectDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* private */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
