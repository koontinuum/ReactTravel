import React from "react";
import LandDestinations from "../../components/landDestinations/LandDestinations";
import TourContent from "../../components/TourContent/TourContent";
import Footer from "../../components/Footer/Footer";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";
import LandingTours from "../../components/LandingTours/LandingTours";
import LandingCityTours from "../../components/LandingCityTours/LandingCityTours.jsx/LandingC/LandingCityTours";
import LandingPost from "../../components/LandingPost/LandingPost";
import LandingCustomer from "../../components/LandingCustomer/LandingCustomer";
import TravelPage from "../TravelPage/TravelPage";



function LandingPage() {
  return (
    <div>
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <LandDestinations />
      <LandingTours />
      <LandingCityTours/>
      <LandingPost/>
      <LandingCustomer/>
      <Footer/>
      <TravelPage/>
    </div>
  );
}

export default LandingPage;
