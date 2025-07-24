import React from "react";
import Navbar from "./componets/Navbar";
import DeskPage from "./componets/DeskPage";
import LearningPage from "./componets/LearningPage";
import RecommendedPage from "./componets/RecommendedPage";
import Creators from "./componets/Creators";
import StudentQueryPage from "./componets/StudentQueryPage";
import EducationOffers from "./componets/EducationOffers";
import Footer from "./componets/Footer";

const CoursePage = () => {
  return (
    <div className="font-poppins">
      <DeskPage />
      <LearningPage />
      <RecommendedPage />
      <Creators />
      <StudentQueryPage />
      <EducationOffers />
      {/* <Footer /> */}
    </div>
  );
};

export default CoursePage;
