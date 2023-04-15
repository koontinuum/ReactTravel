import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage/CheckoutCompletePage";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/checkoutPage" element={<CheckoutPage />} />
        <Route path="/checkoutCompletePage" element={<CheckoutCompletePage />}/>
      </Routes>
    </>
  );
}

export default RoutesComponent;
