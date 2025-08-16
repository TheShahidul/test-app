// components/Body/Body.tsx
import React from "react";
import SliderBox from "./Sliderbox";
import Headmaster from "./Headmaster";
import PresidentInfo from "./President";
import InstituteInfo from "./Institueinfo";
import StudentCorner from "./Student-corner";
import NoticeBoard from "./NoticeBoard";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      {/* Main Column */}
      <div className="flex flex-col gap-8 w-full md:w-2/3">
        <SliderBox />
        <InstituteInfo />
        <StudentCorner />
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-6 w-full md:w-1/3">
        <PresidentInfo />
        <Headmaster />
        <NoticeBoard />
      </div>
    </div>
  );
};

export default Body;
