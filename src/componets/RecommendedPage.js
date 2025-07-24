import React from "react";
import d1 from "../Assets/svgs/d1.svg";
import d2 from "../Assets/svgs/d2.svg";
import d3 from "../Assets/svgs/d3.svg";
import d4 from "../Assets/svgs/d4.svg";
import grid from "../Assets/svgs/grid.svg";
import watch from "../Assets/svgs/watch.svg";
import profileImage from "../Assets/svgs/profileimage.svg";
const RecommendedPage = () => {
  const courses = [
    {
      id: 1,
      image: d1,
    },
    {
      id: 2,
      image: d2,
    },
    {
      id: 3,
      image: d3,
    },
    {
      id: 4,
      image: d4,
    },
  ];
  return (
    <div className="bg-[#9DCCFF] bg-opacity-[0.2]">
      <div className="pt-3 sm:pt-5 lg:pt-10 2xl:pt-[97px] pb-3 sm:pb-5 md:pb-10 lg:pb-20 2xl:pb-[213px] px-5 xxs:px-3 sm:px-10 md:px-5 lg:px-[70px] xl:px-[139px]">
        <div className="flex justify-between items-center">
          <p className="font-medium text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px] max-sm:text-center">
            Recommended for you
          </p>
          <p className="text-[#49BBBD] text-sm lg:text-lg 2xl:text-xl font-bold">
            See all
          </p>
        </div>
        <div className="grid grid-cols-1 mt-5 xxs::mt-[47px] xxs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-[30px] 4xl:gap-[50px] items-center">
          {courses.map((course) => (
            <div
              className=" px-[15px] xxs:px-2 sm:px-[15px] xl:px-5 shadow-lg shadow-[#D9D9D9] rounded-[20px] bg-white"
              key={course.id}
            >
              <div className="pt-3 lg:pt-5 pb-[17px] flex flex-col gap-[10px] xl:gap-3 2xl:gap-5">
                <div>
                  <img src={course.image} />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <img src={grid} className=" w-[18px] xl:w-full" />
                    </div>
                    <span className="text-sm text-[#696984] font-medium">
                      Design{" "}
                    </span>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <img src={watch} className=" w-[18px] xl:w-full" />
                    </div>
                    <span className="text-sm text-[#696984] font-medium">
                      3 Month
                    </span>
                  </div>
                </div>
                <p className="text-[#252641] text-sm xxs:text-xs sm:text-sm md:text-base 2xl:text-xl 4xl:text-2xl font-medium">
                  AWS Certified solutions Architect
                </p>
                <p className=" text-sm xxs:text-xs xs:text-sm xl:text-base 2xl:text-lg text-[#696984]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
              </div>
              <div className="pt-3 sm:pt-[17px] pb-5 lg:pb-[34px] flex justify-between items-center">
                <div className="flex items-center gap-2 lg:gap-[17px]">
                  <div>
                    <img
                      src={profileImage}
                      alt="profile"
                      className="w-[35px] lg:w-[50px] xl:w-full object-cover"
                    />
                  </div>
                  <p className="text-black text-sm lg:text-lg font-medium">
                    Lina
                  </p>
                </div>
                <div className="flex items-center gap-[10px] lg:gap-[14px]">
                  <p className="text-base lg:text-lg font-light text-[#00000080] line-through italic">
                    $100
                  </p>
                  <p className="text-[#49BBBD] text-lg lg:text-xl 2xl:text-2xl font-bold">
                    $80
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPage;
