import React from "react";
import totcImage1 from "../Assets/svgs/totc1.svg";
import totcImage2 from "../Assets/svgs/totc2.svg";
import classroomImage from "../Assets/svgs/classroom.svg";
const ClassroomPage = () => {
  const accessOptions = [
    {
      image: totcImage1,
      role: "FOR INSTRUCTORS",
      buttonLabel: "Start a class today",
    },
    {
      image: totcImage2,
      role: "FOR STUDENTS",
      buttonLabel: "Enter access code",
    },
  ];

  return (
    <div className="flex flex-col gap-[80px] xl:gap-[100px] 2xl:gap-[130px] 4xl:gap-[160px] pb-20 xl:pb-[100px] 4xl:pb-[160px]">
      {/* first */}
      <div className="px-5 xs:px-10 lg:px-[90px] xl:px-[100px] 4xl:px-[310px]">
        <div className="gap-5 flex flex-col">
          <div className="font-semibold text-[20px] xs:text-[22px] lg:text-[28px] 2xl:text-[44px] leading-[160%] text-center">
            <spn className="text-[#2F327D]">What is</spn>{" "}
            <span className="text-[#00CBB8]"> TOTC?</span>
          </div>
          <p className="text-[14px] 2xl:text-[22px] 4xl:text-[24px] leading-[180%] px-4 sm:px-10 lg:px-[116px] text-center text-[#696984]">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="mt-12 md:mt-[77px] flex flex-col sm:flex-row items-center justify-center gap-[35px] xs:gap-10 md:gap-[70px] xl:gap-[100px]">
          {accessOptions.map((item, index) => (
            <div
              className="relative w-fit flex items-center justify-center "
              key={index}
            >
              <div className="flex flex-col gap-[17px] items-center absolute">
                <p className="text-sm xs:text-lg sm:text-base xl:text-lg 2xl:text-xl 3xl:text-[26px] 4xl:text-[32px] font-semibold text-[#FFFFFF]">
                  {item.role}
                </p>
                <button
                  className={`px-[14px] xs:px-[22px] sm:px-3 md:px-[26px] xl:px-[30px] 4xl:px-[38px] py-3 xs:py-[16px] sm:py-[9px] md:py-[13px] lg:py-[18px] 4xl:py-6 rounded-[80px] text-sm xs:text-base sm:text-sm lg:text-base xl:text-lg 4xl:text-[22px] font-medium text-white ${
                    index == "1"
                      ? "bg-[#23BDEEE5]"
                      : "border border-[#FFFFFF] bg-transparent"
                  }`}
                >
                  {item.buttonLabel}
                </button>
              </div>
              <img src={item.image} alt="image" className="" />
            </div>
          ))}
        </div>
      </div>
      {/* secomnd */}
      <div className="px-5 xs:px-10 lg:px-[90px] xl:px-[100px] 4xl:px-[187px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md992:gap-[67px] ">
          <div className="flex flex-col gap-5 md:gap-[30px]">
            <div className="font-medium text-[20px] xs:text-[22px] lg:text-[20px] xl:text-[24px] 2xl:text-[36px] leading-[160%] ">
              <p className="relative w-fit z-10">
                <spn className="text-[#2F327D]">
                  Everything you can do in a physical classroom,
                </spn>
                <span className="text-[#00CBB8]">you can do with TOTC</span>
                <div className="w-[50px] 2xl:w-[73px] h-[50px] 2xl:h-[73px] bg-[#33EFA0] rounded-full absolute z-1 top-[-13px] left-[-18px] 2xl:left-[-25px] -z-10"></div>
              </p>
            </div>
            <p className="text-[14px] 2xl:text-[22px] 4xl:text-[24px] leading-[180%] text-[#696984] relative pr-[32px]">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
              <div className="w-[20px] 2xl:w-[30px] h-[20px] 2xl:h-[30px] bg-[#33EFA0] rounded-full absolute z-1 top-[68px] right-[86px] 2xl:right-[47px] -z-10"></div>
            </p>
          </div>
          <div className="w-fit relative">
            <div className=" w-[100px] xl:w-[138px] h-[100px] xl:h-[139px] bg-[#23BDEE] rounded-[20px] absolute z-1 top-[-10px] xl:top-[-15px] 2xl:top-[-20px] left-[-10px] xl:left-[-15px] 2xl:left-[-20px]"></div>
            <div className="w-[140px] xl:w-[180px] 2xl:w-[231px] h-[140px] xl:h-[180px] 2xl:h-[231px] bg-[#33EFA0] rounded-[20px] absolute z-1 bottom-[-10px] md:bottom-[35px] md992:bottom-[-10px] xl:bottom-[-15px] 2xl:bottom-[-20px] right-[-10px] xl:right-[-15px] 2xl:right-[-20px]"></div>

            <img
              src={classroomImage}
              alt="classroom-image"
              className="z-30 relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
