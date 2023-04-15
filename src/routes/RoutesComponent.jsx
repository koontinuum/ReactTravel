import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import TravelPage from "../pages/TravelPage/TravelPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import TravelBlogPage from "../pages/TravelBlogPage/TravelBlogPage";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/Travelpage" element={<TravelPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/travelblogpage" element={<TravelBlogPage />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
