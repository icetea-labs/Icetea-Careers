import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/base/PrivateRoute";
import AdminCreate from "./components/pages/AdminCreate/AdminCreate";
import AdminUpdate from "./components/pages/AdminCreate/AdminUpdate";
import Admins from "./components/pages/Admins";
import Home from "./components/pages/Home";
import JobCreate from "./components/pages/JobCreate/JobCreate";
import JobUpdate from "./components/pages/JobCreate/JobUpdate";
import Jobs from "./components/pages/Jobs";
import Login from "./components/pages/Login";
import NotFoundPage from "./components/pages/NotFoundPage";

const routing = function createRouting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/add"
          element={
            <PrivateRoute>
              <JobCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <PrivateRoute>
              <JobUpdate />
            </PrivateRoute>
          }
        />
        <Route
          path="/admins"
          element={
            <PrivateRoute>
              <Admins />
            </PrivateRoute>
          }
        />
        <Route
          path="/admins/add"
          element={
            <PrivateRoute>
              <AdminCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/admins/:id"
          element={
            <PrivateRoute>
              <AdminUpdate />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;
