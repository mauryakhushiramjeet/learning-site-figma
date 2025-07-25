import React, { useState } from "react";
import colorPalatted from "../Assets/svgs/colorPalette.svg";
import arrow from "../Assets/svgs/courceArrow.svg";

import BookCard from "./CadsComponent/BookCard";
import TagCard from "./CadsComponent/TagCard";
import book from "../Assets/books.jpg";
import moon from "../Assets/moon2.jpg";
import camera from "../Assets/svgs/camera.avif";
import ribbon from "../Assets/svgs/ribbon.svg";
import global from "../Assets/svgs/globe.svg";

const ExploreCourse = () => {
  const [hoveredIndex1, setHoveredIndex1] = useState(6);
  const [hoveredIndex2, setHoveredIndex2] = useState(1);
  const [hoveredIndex3, setHoveredIndex3] = useState(4);
  const tags = [
    { label: "Ut Sed Eros", bg: "bg-[#F25022]" },
    { label: "Curabitur Egestas", bg: "bg-[#F78CA2]" },
    { label: "Quisque Conseq.", bg: "bg-[#B05B22]" },
    { label: "Cras Convallis", bg: "bg-[#FDBB2D]" },
    { label: "Vestibulum fauci...", bg: "bg-[#C87CF9]" },
    { label: "Ut Sed Eros", bg: "bg-[#00ADEF]" },
    { label: "Vestibulum faucibu", bg: "bg-[#71C7B1]" },
  ];

  return (
    <div className="bg-[#EBF5FF] pl-5 sm:pl-10 xl:pl-[100px] 4xl:pl-[155px] pr-5 sm:pr-10 xl:pr-[73px] pt-7 sm:pt-[60px] 2xl:pt-[100px] 4xl:pt-[247px] pb-[62px] font-roboto mt-[35px] xs:mt-[57px]">
      <div className="flex flex-col gap-[10px] xl:gap-[15px] 4xl:gap-6">
        <p className="text-[#000000DE] opacity-[87%] text-[22px] xl:text-[26px] 2xl:text-[35px] 4xl:text-[40px] font-bold">
          Explore Course
        </p>
        <p className="text-[#0000008A] opacity-[54%] text-sm lg:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl font-medium">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>
      </div>
      <div className="mt-6 sm:mt-10 xl:mt-[60px] 2xl:mt-[70px] 4xl:mt-[111px]">
        <div className="flex flex-col gap-[50px] sx:gap-20 xl:gap-[100px] 2xl:gap-[135px]">
          {/* section 1 */}

          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <img src={colorPalatted} className="w-4 xl:w-6 2xl:w-full" />
                </div>
                <p className="text-sm xl:text-[20px] 2xl:text-[25px] 4xl:text-[28px] font-bold opacity-[75%]">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex gap-5 4xl:gap-[49px] items-center">
                <p className="text-base 2xl:text-xl 4xl:text-[24px] font-medium text-[#00BCD4]">
                  See all
                </p>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 xl:w-5 3xl:w-[22px] 4xl:w-10"
                />
              </div>
            </div>
            <div className="flex sm:justify-around items-center hide-scrollbar mt-[41px] max-md:gap-3 max-md:overflow-x-auto scrollbar-hide">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className={`${
                    hoveredIndex1 == index
                      ? "opacity-100  ml-2 mr-2 transition-all duration-500 delay-500"
                      : ""
                  }`}
                  onClick={() => setHoveredIndex1(index)}
                  // onMouseLeave={() => setHoveredIndex1(null)}
                >
                  {hoveredIndex1 == index ? (
                    <BookCard image={moon} />
                  ) : (
                    <TagCard tag={tag} />
                  )}
                </div>
              ))}
            </div>
           

          </div>
          {/* section 2 */}
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <img src={global} className="w-4 xl:w-6 2xl:w-full" />
                </div>
                <p className="text-sm xl:text-[20px] 2xl:text-[25px] 4xl:text-[28px] font-bold opacity-[75%]">
                  Quisque a Consequat
                </p>
              </div>
              <div className="flex gap-5 4xl:gap-[49px] items-center">
                <p className=" text-base 2xl:text-xl 4xl:text-[24px] font-medium text-[#00BCD4]">
                  See all
                </p>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 xl:w-5 3xl:w-[22px] 4xl:w-10"
                />
              </div>
            </div>
            <div className="flex justify-around items-center mt-[41px] max-md:gap-3 max-md:overflow-x-scroll hide-scrollbar">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  onClick={() => setHoveredIndex2(index)}
                  // onMouseLeave={() => setHoveredIndex2(null)}
                  className={`${
                    hoveredIndex2 == index
                      ? "opacity-100 ml-2 mr-2 transition-all duration-500 delay-75"
                      : ""
                  }`}
                >
                  {hoveredIndex2 == index ? (
                    <BookCard image={book} />
                  ) : (
                    <TagCard tag={tag} />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* section 3rd */}
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <img src={ribbon} className="w-4 xl:w-6 2xl:w-full" />
                </div>
                <p className=" text-sm xl:text-[20px] 2xl:text-[25px] 4xl:text-[28px] font-bold opacity-[75%]">
                  Aenean Facilisis
                </p>
              </div>
              <div className="flex gap-5 4xl:gap-[49px] items-center">
                <p className="text-base 2xl:text-xl 4xl:text-[24px] font-medium text-[#00BCD4]">
                  See all
                </p>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 xl:w-5 3xl:w-[22px] 4xl:w-10"
                />
              </div>
            </div>
            <div className="flex justify-around  items-center mt-[41px] max-md:gap-3 max-md:overflow-x-scroll hide-scrollbar">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  onClick={() => setHoveredIndex3(index)}
                  // onMouseLeave={() => setHoveredIndex3(null)}
                  className={`${
                    hoveredIndex3 == index
                      ? "opacity-100  ml-2 mr-2 transition-all duration-500 delay-75"
                      : ""
                  }`}
                >
                  {hoveredIndex3 == index ? (
                    <BookCard image={camera} />
                  ) : (
                    <TagCard tag={tag} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourse;
