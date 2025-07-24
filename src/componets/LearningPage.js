import React from "react";
import image1 from "../Assets/svgs/image1.svg";
import image2 from "../Assets/svgs/image2.svg";
import image3 from "../Assets/svgs/image 3.svg";
import image4 from "../Assets/svgs/image4.svg";
import image5 from "../Assets/svgs/image5.svg";

import signal from "../Assets/svgs/Group 58.svg";
import phone from "../Assets/svgs/phone.svg";
import circle from "../Assets/svgs/circle.svg";

const LearningPage = () => {
  const learningPointes = [
    "Free E-book, video & consolation",
    "Top instructors from around world",
    "Top courses from your team",
  ];
  const dots = ["#EE6767", "#F6C566", "#5BEB7B"];
//   const teachingSteps = [
//   {
//     icon: icon1,
//     text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
//   },
//   {
//     icon: icon2,
//     text: "TA’s and presenters can be moved to the front of the class.",
//   },
//   {
//     icon: icon3,
//     text: "Teachers can easily see all students and class data at one time.",
//     underline: true,
//   },
// ];
  return (
    <section className="px-[3px] sm:px-5 lg:px-[70px] xl:px-[119px] mb-5 lg:mb-10 2xl:mb-[65px]">
      <div className="pr-1 xs:pr-6 3xl:pr-[215px] 4xl:pr-[250px] pl-1 xs:pl-6 3xl:pl-10 4xl:pl-[133px] pt-[33px] pb-[62px] flex  flex-col 3xl:flex-row gap-8 4xl:gap-[256px] items-center bg-[#9DCCFF] bg-opacity-[0.2] rounded-[20px] ">
        <div className=" flex flex-col gap-5 3xl:gap-[25px] max-3xl:items-center max-3xl:w-full">
          <p className="text-[#252641] text-lg lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px]  max-xs:px-5 font-semibold max-sm:text-center leading-7 lg:leading-8 4xl:leading-[44px]">
            Know about learning learning platform
          </p>
          <div className="flex flex-col gap-[10px]">
            {learningPointes.map((point, index) => (
              <div className="flex gap-3 2xl:gap-4 items-center">
                <div className=" h-[10px] md:h-3 lg:h-5 w-[10px] md:w-3 lg:w-5 bg-[#55EFC4] rounded-full"></div>
                <p className="text-[#2D3436] text-base xl:text-xl 3xl:text-base 2xl:text-lg font-inter text-nowrap">
                  {point}
                </p>
              </div>
            ))}
          </div>
          <div className="px-[50px] md:px-[39px] py-2 md:py-3 2xl:py-4 bg-[#49BBBD] rounded-[12px] font-semibold 2xl:font-bold text-base xs:text-xl md:text-xl 3xl:text-xl 2xl:text-2xl text-[#FFFFFF] text-center">
            Start learning now
          </div>
        </div>
        <div className="w-full bg-[#F4F4F499] rounded-[20px] border-l border-b border-r  border-r-black border-l-black border-b-black">
          <div className="bg-[#EAEAEA99] py-5 3xl:py-[9px] pl-6 flex gap-[9px] w-full">
            {dots.map((d, index) => (
              <div
                key={index}
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: d }}
              ></div>
            ))}
          </div>
          <div className="relative  ">
            {" "}
            <div className="pt-[33px] pb-[43px] 3xl:pb-0 2xl:pt-[53px] pl-1  lg:pl-[30px] 2xl:pl-[76px] pr-1 lg:pr-[30px] max-xs:items-center 3x:pr-0 flex flex-col sm:flex-row max-3xl:justify-around max-md:gap-5 3xl:gap-[29px] 2xl:gap-[13px] 4xl:gap-[58px] w-full">
              <div className="flex flex-col gap-[31px] items-center">
                <div>
                  <div className="relative">
                    <img
                      src={image1}
                      className="rounded-[17px] w-[300px] sm:w-[200px] lg:w-[317px] 3xl:w-full "
                    />
                    <div className="bg-[#C9D3E766 rounded-[5px]]  bg-opacity-40 backdrop-blur-md pr-[9px] pl-[5px] py-[3px] flex justify-between absolute   bottom-[7px] left-[7px] items-center">
                      <div>
                        <img
                          src={signal}
                          alt="signal"
                          className="object-cover"
                        />
                      </div>
                      <button className="px-[6px] py-[2px] rounde-[5px] bg-[#3793FF] text-white text-[10px] ml-[5px] font-semibold font-nunitosans mr-2">
                        Instructor
                      </button>
                      <p
                        className="font-semibold text-[11px] text-white
                    "
                      >
                        Eveny Howard
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[21px] items-center">
                  <button className="px-4 lg:px-9 3xl:px-5 2xl:px-[33px] py-1 lg:py-[9px] rounded-[51px] font-bold text-base lg:text-xl 3xl:text-base 2xl:text-[22px] bg-[#3465E1] shadow-[0px_8.51px_20.43px_0px_#3465E14D] text-white font-nunitosans">
                    Present
                  </button>
                  <div className="px-4 lg:px-9 3xl:px-5 2xl:px-[33px] py-1 lg:py-[9px] font-nunitosans rounded-[51px] bg-[#E13468] shadow-[0px_8.51px_20.43px_0px_#CA2F5D4D] font-bold text-base lg:text-xl 3xl:text-base 2xl:text-[22px] text-white flex gap-2 items-center">
                    <div>
                      <img src={phone} alt="phone" />
                    </div>
                    <p>Call</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-col gap-[22px] items-center">
                <div className="relative w-full">
                  <img
                    src={image2}
                    className=" w-[300px] xs:w-full rounded-[17px] pt-[3px]"
                  />
                  <div className="bg-[#C9D3E766 rounded-[5px]]  bg-opacity-40 backdrop-blur-md pr-[9px] pl-[5px] py-[3px] flex justify-between absolute bottom-[8px] left-[8px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>

                    <p
                      className="font-semibold text-[11px] pl-[5px] text-white
                    "
                    >
                      Tamara Clarke
                    </p>
                  </div>
                </div>
                <div className="relative 3xl:pb-10 w-full">
                  <img
                    src={image3}
                    className="rounded-[17px] w-[300px] xs:w-full"
                  />
                  <div className="bg-[#C9D3E766] rounded-[5px]  bg-opacity-40 backdrop-blur-md pr-[9px] pl-[5px] py-[3px] flex justify-between absolute bottom-[9px] 3xl:bottom-[45px] left-[7px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>

                    <p
                      className="font-semibold text-[11px] pl-[5px] text-white
                    "
                    >
                      Humbert Holland
                    </p>
                  </div>
                  <div className="absolute bottom-20 md:bottom-[90px] hidden sm:block  lg:bottom-[73px] 3xl:bottom-[115px]  2xl:bottom-[86px] left-[-29px] md:-left-10 lg:left-[-47px] 2xl:left-[-80px]">
                    <img
                      src={circle}
                      alt="circle-image"
                      className="w-20 md:w-[90px] lg:w-[100px] 2xl:w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-col gap-[37px] 3xl:absolute top-[17px] -right-[157px] 3xl:right-[-134px] 2xl:right-[-126px]">
                <div className="relative w-full">
                  <img
                    src={image4}
                    className="rounded-[17px] max-sm:w-[300px]"
                  />
                  <div className="bg-[#C9D3E766] rounded-[5px]] bg-opacity-40 backdrop-blur-md px-[7px] py-[3px] flex justify-between absolute bottom-[9px] left-[9px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>
                    <p
                      className="font-semibold pl-1 text-[11px] text-white
                    "
                    >
                      Adam Levin
                    </p>
                  </div>
                </div>
                <div className="relative w-full">
                  <img
                    src={image5}
                    alt="iamge5"
                    className="rounded-[17px] max-sm:w-[300px]"
                  />
                  <div className="bg-[#C9D3E766 rounded-[5px]] bg-opacity-40 backdrop-blur-md px-[7px] py-[3px] flex justify-between absolute  bottom-[9px] left-[9px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>
                    <p
                      className="font-semibold pl-1 text-[11px] text-white
                    "
                    >
                      Patricia Mendoza
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPage;
