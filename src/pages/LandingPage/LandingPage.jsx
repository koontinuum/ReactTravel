import React from "react";
import TourContent from "../../components/TourContent/TourContent";
import Footer from "../../components/Footer/Footer";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";


function LandingPage() {
  return (
    <div>
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <Footer />
    </div>
  );
}

export default LandingPage;
