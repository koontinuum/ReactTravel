import React from "react";
import Header from "../../components/Header/Header";
import TravelBlogMain from "../../components/TravelBlogMain/TravelBlogMain";
import TravelBlogSocialText from "../../components/TravelBlogSocialText/TravelBlogSocialText";
import AboutLatestPosts from "../../components/AboutLatestPosts/AboutLatestPosts";
import Footer from "../../components/Footer/Footer";

function TravelBlogPage() {
  return (
    <div>
      <Header />
      <TravelBlogMain />
      <TravelBlogSocialText />
      <AboutLatestPosts />
      <Footer />
    </div>
  );
}

export default TravelBlogPage;
