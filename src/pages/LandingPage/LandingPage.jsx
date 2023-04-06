import React from "react";
import TourContent from "../../components/TourContent/TourContent";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";
import LandingTours from "../../components/LandingTours/LandingTours";

function LandingPage() {
  return (
    <div>
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <LandingTours />
    </div>
  );
}

export default LandingPage;
