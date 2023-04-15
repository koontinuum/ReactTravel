import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage/CheckoutCompletePage";
import TravelPage from "../pages/TravelPage/TravelPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import TravelContactPage from "../pages/TravelContactPage/TravelContactPage";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/checkoutPage" element={<CheckoutPage />} />
        <Route path="/checkoutCompletePage" element={<CheckoutCompletePage />}/>
        <Route path="/Travelpage" element={<TravelPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactPage" element={<TravelContactPage />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
