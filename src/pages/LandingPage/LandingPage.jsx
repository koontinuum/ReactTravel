import React from "react";
import LandDestinations from "../../components/landDestinations/LandDestinations";
import TourContent from "../../components/TourContent/TourContent";
import Footer from "../../components/Footer/Footer";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";
import LandingTours from "../../components/LandingTours/LandingTours";
import TourCard from "../../components/tourCard/TourCard";



function LandingPage() {
  return (
    <div>
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <LandDestinations />
      <LandingTours />
      <Footer />
      <TourCard/>
    </div>
  );
}

export default LandingPage;
