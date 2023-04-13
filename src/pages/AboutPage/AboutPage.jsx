import React from "react";
import Header from "../../components/Header/Header";
import AboutUsCards from "../../components/AboutUsCards/AboutUsCards";
import AboutOurMission from "../../components/AboutOurMission/AboutOurMission";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import LandingCustomer from "../../components/LandingCustomer/LandingCustomer";
import AboutClients from "../../components/AboutClients/AboutClients";
import AboutLatestPosts from "../../components/AboutLatestPosts/AboutLatestPosts";
import Footer from "../../components/Footer/Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <AboutUsCards />
      <AboutOurMission />
      <AboutTeam />
      <LandingCustomer />
      <AboutClients />
      <AboutLatestPosts />
      <Footer />
    </div>
  );
}

export default AboutPage;
