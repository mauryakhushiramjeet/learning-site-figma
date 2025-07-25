import React from "react";
import HeroPage from "./componets/HeroPage";
import SuccessPage from "./componets/SuccessPage";
import CloudSoftwarePage from "./componets/CloudSoftwarePage";
import ClassroomPage from "./componets/ClassroomPage";
import FeturesPage from "./componets/FeturesPage";
import TeacherTools from "./componets/TeacherTools";
import ManagementPage from "./componets/ManagementPage";
import ExploreCourse from "./componets/ExploreCourse";
import ReasourcesPage from "./componets/ReasourcesPage";
const Home = () => {
  return (
    <div className="font-poppins">
      <HeroPage />
      <SuccessPage/>
      <CloudSoftwarePage/>
      <ClassroomPage/>
      <FeturesPage/>
      <TeacherTools/>
      <ManagementPage/>
      <ExploreCourse/>
      <ReasourcesPage/>
    </div>
  );
};

export default Home;
