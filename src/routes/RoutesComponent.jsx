import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import TravelPage from "../pages/TravelPage/TravelPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/Travelpage" element={<TravelPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
