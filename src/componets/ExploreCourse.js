import React from "react";
import colorPalatted from "../Assets/svgs/colorPalette.svg";
import arrow from "../Assets/svgs/courceArrow.svg";
const ExploreCourse = () => {
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
    <div className="bg-[#EBF5FF] pl-[155px] pr-[73px] pt-[247px] pb-[62px] font-roboto mt-[57px]">
      <div className="flex flex-col gap-6">
        <p className="text-[#000000DE] opacity-[87%] text-[40px] font-bold">
          Explore Course
        </p>
        <p className="text-[#0000008A] opacity-[54%] text-[24px] font-medium">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>
      </div>
      <div className="mt-[111px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <img src={colorPalatted} />
            </div>
            <p className="text-[28px] font-bold">Lorem Ipsum</p>
          </div>
          <div className="flex gap-[49px] items-center">
            <p className="text-[24px] font-medium text-[#00BCD4]">See all</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="flex gap-[28px] items-center mt-[41px">
          {tags.map((tag, index) => (
            // <div
            //   className="px-[66px] py-5 bg-[white] rounded-[53px] rotate-[73deg]"
            //   key={index}
            // >
            //   <div className="px-[66px] py-5 bg-[#CCFABC] rounded-[25px] ">
            //     <div
            //       className={`px-[66px] py-5 ${tag.bg} rounded-[25px]  text-[24px] text-nowrap text-white text-center w-fit font-medium`}
            //     >
            //       {tag.label}
            //     </div>
            //   </div>
            // </div>
            <div
              className="py-[20px] px-2 bg-[white] rounded-[53px] rotate-[73deg]"
              key={index}
            >
              <div className="py-[20px] px-2 bg-[#CCFABC] rounded-[25px] ">
                <div
                  className={`py-[20px] px-2 ${tag.bg} rounded-[25px]  text-[24px] text-nowrap text-white text-center w-fit font-medium`}
                >
                  {tag.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourse;
