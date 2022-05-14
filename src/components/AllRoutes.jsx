import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const AllRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
