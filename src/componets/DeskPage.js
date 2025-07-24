import React from "react";
import down from "../Assets/svgs/dropDown.jpg";
import d1 from "../Assets/svgs/d1.svg";
import d2 from "../Assets/svgs/d2.svg";
import d3 from "../Assets/svgs/d3.svg";
import d4 from "../Assets/svgs/d4.svg";
import d5 from "../Assets/svgs/d5.svg";
import d6 from "../Assets/svgs/d6.svg";
import d7 from "../Assets/svgs/d7.svg";
import d8 from "../Assets/svgs/d8.svg";
import grid from "../Assets/svgs/grid.svg";
import watch from "../Assets/svgs/watch.svg";
import profileImage from "../Assets/svgs/profileimage.svg";

const DeskPage = () => {
  const searchMenu = [
    "Subject",
    "Partner",
    "Program",
    "Language",
    "Availiblity",
    "Learning Type",
  ];
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
    {
      id: 5,
      image: d5,
    },
    {
      id: 6,
      image: d6,
    },
    {
      id: 7,
      image: d7,
    },
    {
      id: 8,
      image: d8,
    },
  ];

  return (
    <>
      {/* srach section */}
      <section>
        <div className="bg-metting  px-5 sm:px-[70px] lg:px-[100px] xl:px-[171px] 4xl:px-[298px] flex flex-col items-center py-9 lg:py-12 4xl:py-20 gap-5">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search your favourite course"
              className="pl-3 xxs:pl-[34px] py-2 xxs:py-[10px] sm:py-[8px] lg:py-[10px] xl:py-4 2xl:py-[22px] w-full text-xs xxs:text-sm lg:text-base xl:text-lg 3xl:text-xl font-normal rounded-[7px] lg:rounded-[10px] outline-none"
            />
            <button className="bg-[#49BBBD] text-white rounded-[6px] lg:rounded-[12px] text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-center font-normal xxs:font-semibold xl:font-bold py-[4px] xxs:py-2 sm:py-[6px] xl:py-[10px] 2xl:py-4 px-[10px] lg:px-[15px] xl:px-[42px] absolute right-[2px] xl:right-[5px] top-[2px] xl:top-[5px]">
              Search
            </button>
          </div>
          <div className="w-full">
            <ul className="flex flex-wrap gap-[10px] lg:gap-5 items-center justify-center lg:justify-between">
              {searchMenu.map((menu) => (
                <li className="p-[10px] xl:p-[14px] 3xl:p-[19px] flex gap-[10px] md:gap-[5px] lg:gap-[10px] items-center bg-white rounded-[10px]">
                  <p className="font-medium text-xs xxs:text-sm md:text-xxs lg:text-base xl:text-lg 2xl:text-2xl text-[#252641] tracking-4p">
                    {menu}
                  </p>
                  <div>
                    <img src={down} alt="drop-Down" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* desk secttion */}
      {/* ne thing */}
      <section className="pt-5 xxs:pt-[50px] xl:pt-[69px] pb-[65px] px-5 xxs:px-3 sm:px-10 md:px-5 lg:px-[70px] xl:px-[120px]">
        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-[30px] 4xl:gap-[62px] items-center">
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
               <p className="text-[#252641] text-base 2xl:text-xl 4xl:text-2xl font-medium">
                  AWS Certified solutions Architect
                </p>
                <p className="text-sm xl:text-base 2xl:text-lg text-[#696984]">
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
                  <p className="text-[#49BBBD] text-base xxs:text-lg lg:text-xl 2xl:text-2xl font-bold">
                    $80
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DeskPage;
