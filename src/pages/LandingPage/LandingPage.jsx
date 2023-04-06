import React from "react";
import LandDestinations from "../../components/landDestinations/LandDestinations";
import TourContent from "../../components/TourContent/TourContent";
import Footer from "../../components/Footer/Footer";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";
import LandingTours from "../../components/LandingTours/LandingTours";



function LandingPage() {
  return (
    <div>
       <TourContent />
      <LandingDevice/>
      <LandingFrames/>
      <LandDestinations/>
      <Footer />
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <LandingTours />
    </div>
  );
}

export default LandingPage;
