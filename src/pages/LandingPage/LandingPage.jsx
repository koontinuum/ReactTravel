import React from "react";
import LandDestinations from "../../components/landDestinations/LandDestinations";
import TourContent from "../../components/TourContent/TourContent";
import Footer from "../../components/Footer/Footer";
import LandingDevice from "../../components/LandingDevice/LandingDevice";
import LandingFrames from "../../components/LandingFrames/LandingFrames";
import LandingTours from "../../components/LandingTours/LandingTours";
import LandingCities from "../../components/LandingCities/LandingCities";
import LandingPost from "../../components/LandingPost/LandingPost";
import LandingCustomer from "../../components/LandingCustomer/LandingCustomer";
import Newsletter from "../../components/Newsletter/Newsletter";

function LandingPage() {
  return (
    <div>
      <TourContent />
      <LandingDevice />
      <LandingFrames />
      <LandDestinations />
      <tourCard />
      <LandingTours />
      <LandingCities />
      <LandingPost />
      <LandingCustomer/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default LandingPage;
