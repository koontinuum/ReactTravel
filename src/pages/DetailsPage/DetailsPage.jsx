import React from "react";
import Header from "../../components/Header/Header";
import DetailsTourContent from "../../components/DetailsTourContent/DetailsTourContent";
import DetailsTourInfo from "../../components/DetailsTourInfo/DetailsTourInfo";
import DetailsDescription from "../../components/DetailsDescription/DetailsDescription";
import DetailsReviews from "../../components/DetailsReviews/DetailsReviews";

function DetailsPage() {
  return (
    <div>
      <Header />
      <DetailsTourContent />
      <DetailsTourInfo />
      <DetailsDescription />
      <DetailsReviews/>
    </div>
  );
}

export default DetailsPage;
