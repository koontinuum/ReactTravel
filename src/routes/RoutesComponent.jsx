import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

function RoutesComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default RoutesComponent;
