import React from "react";

import image1 from "../Assets/svgs/feature2.svg";
import image4 from "../Assets/svgs/feature1.svg";
import image5 from "../Assets/svgs/feature3.svg";
import image3 from "../Assets/svgs/feture4.svg";
import image2 from "../Assets/svgs/feature5.svg";

import signal from "../Assets/svgs/Group 58.svg";
import phone from "../Assets/svgs/phone.svg";
import circle from "../Assets/svgs/circle.svg";
import icon1 from "../Assets/svgs/fetureicon1.svg";
import icon2 from "../Assets/svgs/featureicon2.svg";
import icon3 from "../Assets/svgs/featureicon3.svg";

const FeturesPage = () => {
  const dots = ["#EE6767", "#F6C566", "#5BEB7B"];
  const teachingSteps = [
    {
      icon: icon1,
      text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
    {
      icon: icon2,
      text: "TA’s and presenters can be moved to the front of the class.",
    },
    {
      icon: icon3,
      text: "Teachers can easily see all students and class data at one time.",
      underline: true,
    },
  ];
  return (
    <div className="px-5 sm:px-10 md:px-[60px] 4xl:px-[170px] pb-[100px] xl:pb-[130px] 4xl:pb-[160px]">
      <div className="flex flex-col  items-center gap-3 4xl:gap-5">
        <div className="font-bold text-[26px] md992:text-[20px] xs:text-[22px] lg:text-[28px] 2xl:text-[36px] leading-[180%] text-center">
          <spn className="text-[#2F327D]"> Our </spn>
          <span className="text-[#00CBB8]">Features</span>
        </div>
        <p className="text-[14px] 2xl:text-[22px] 4xl:text-[24px] leading-[180%] text-center text-[#696984]">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="mt-20 xl:mt-[120px] 2xl:mt-[176px] flex flex-col md992:flex-row gap-20 md992:gap-[100px] xl:gap-[160px] 2xl:gap-[193px] 4xl:gap-[239px] items-center">
        {/* first */}
        <div className="w-full rounded-[20px] max-sm:bg-white sm:bg-feturebgImage bg-no-repeat bg-cover border border-black">
          <div className="bg-[#EAEAEA99] py-2 pl-6 flex gap-[9px] w-full sm:hidden">
            {dots.map((d, index) => (
              <div
                key={index}
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: d }}
              ></div>
            ))}
          </div>
          {/* div1 */}
          <div className="xl:pb-[44px] relative">
            {/* pl-1  lg:pl-[30px]   pr-1*/}
            <div className="pb-10 xs:pb-[43px] 3xl:pb-0 pt-[60px] z-10 pl-[10px] sm:pl-5 3xl:pl-[60px] 2xl:pl-[86px] max-sm:pr-[10px] md:pr-20 xl:pr-[127px] 4xl:pr-[160px] max-xs:items-center 3x:pr-0 flex flex-col sm:flex-row max-md:justify-around gap-[39px]  3xl:gap-[29px] 2xl:gap-[100px] w-full max-md992:justify-around">
              <div className="flex flex-col gap-[31px] items-center">
                <div>
                  <div className="relative">
                    <img
                      src={image1}
                      className="rounded-[17px] w-[300px] max-3xl:w-[200px] "
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
                        className="font-semibold text-[11px] 4xl:text-[15px] text-white
                    "
                      >
                        Eveny Howard
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[21px] items-center">
                  <button className="px-4 lg:[22px] xl:px-9 3xl:px-5 2xl:px-[33px] py-1 md:py-[5px] xl:py-[9px] rounded-[51px] font-bold text-sm xl:text-xl 3xl:text-base 2xl:text-[22px] bg-[#3465E1] shadow-[0px_8.51px_20.43px_0px_#3465E14D] text-white font-nunitosans">
                    Present
                  </button>
                  <div className="px-4 lg:[22px] xl:px-9 3xl:px-5 2xl:px-[33px] py-1 md:py-[5px] xl:font-nunitosans rounded-[51px] bg-[#E13468] shadow-[0px_8.51px_20.43px_0px_#CA2F5D4D] font-bold text-sm xl:text-xl 3xl:text-base 2xl:text-[22px] text-white flex gap-2 items-center">
                    <div>
                      <img src={phone} alt="phone" />
                    </div>
                    <p>Call</p>
                  </div>
                </div>
              </div>
              {/* div-2 */}
              <div className="flex flex-col xs:flex-row sm:flex-col gap-[22px] items-center">
                <div className="relative w-full">
                  <img
                    src={image2}
                    className="w-[300px] sm:w-[120px] xl:w-full rounded-[17px] pt-[3px]"
                  />
                  <div className="bg-[#C9D3E766 rounded-[5px]]  bg-opacity-40 backdrop-blur-md pr-[9px] pl-[5px] py-[3px] flex justify-between absolute bottom-[8px] left-[8px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>

                    <p
                      className="font-semibold text-[11px] 4xl:text-[15px] pl-[5px] text-white text-nowrap
                    "
                    >
                      Tamara Clarke
                    </p>
                  </div>
                </div>

                <div className="relative w-full">
                  <img
                    src={image3}
                    className="rounded-[17px] w-[300px] sm:w-[120px] xl:w-full"
                  />
                  <div className="bg-[#C9D3E766] rounded-[5px]  bg-opacity-40 backdrop-blur-md pr-[9px] pl-[5px] py-[3px] flex justify-between absolute bottom-[8px] left-[7px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>

                    <p
                      className="font-semibold text-[11px] 4xl:text-[15px] pl-[5px] text-white text-nowrap
                    "
                    >
                      Humbert Holland
                    </p>
                  </div>
                  <div className="absolute hidden sm:block bottom-[50px]  xl:bottom-[95px] 3xl:bottom-[79px]  2xl:bottom-[56px] left-[-29px] md:-left-10 lg:left-[-47px] 2xl:left-[-80px]">
                    <img
                      src={circle}
                      alt="circle-image"
                      className="w-20 md:w-[90px] lg:w-[100px] 2xl:w-full"
                    />
                  </div>
                </div>
              </div>
              {/* div-3 */}
              <div className="flex flex-col xs:flex-row sm:flex-col gap-[37px] md992:absolute top-[51px] right-[-83px] xl:right-[-126px]  2xl:right-[-122px]">
                <div className="relative w-full sm:w-fit mx-auto">
                  <img
                    src={image4}
                    className="rounded-[17px] w-[300px] sm:w-[150px] xl:w-full"
                  />
                  <div className="bg-[#C9D3E766] rounded-[5px]] bg-opacity-40 backdrop-blur-md px-[7px] py-[3px] flex justify-between absolute bottom-[9px] left-[9px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>
                    <p
                      className="font-semibold pl-1 text-[11px] 4xl:text-[15px] text-white
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
                    className="rounded-[17px] w-[300px] sm:w-[150px] xl:w-full"
                  />
                  <div className="bg-[#C9D3E766 rounded-[5px]] bg-opacity-40 backdrop-blur-md px-[7px] py-[3px] flex justify-between absolute  bottom-[9px] left-[9px] items-center">
                    <div>
                      <img src={signal} alt="signal" className="object-cover" />
                    </div>
                    <p
                      className="font-semibold pl-1 text-[11px] 4xl:text-[15px] text-white
                    "
                    >
                      Patricia Mendoza
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[200px] xl:w-[264px] h-[200px] xl:h-[264px] rounded-full bg-[#5B61EB] bottom-[-50px] sm:bottom-[-64px] xl:bottom-[-91px] 3xl:bottom-[-112px] 2xl:bottom-[-115px] right-3 md992:right-[-50px] xl:right-[-84px] -z-10"></div>

            <div className="absolute w-5 2xl:w-[30px] h-5 2xl:h-[30px] rounded-full bg-[#F56666] bottom-[-58px] xl:bottom-[-70px] right-[200px] md992:right-[123px] xl:right-[185px] -z-10"></div>
            <div className="absolute w-[100px] xl:w-[140px] h-[100px] xl:h-[140px] rounded-full bg-[#33EFA0] -z-10 top-[-86px] sm:top-[-40px] xs:top-[-55px] xl:top-[-66px] 4xl:top-[-76px] left-5 sm:left-[63px]"></div>
            <div className="absolute w-5 2xl:w-[30px] h-5 2xl:h-[30px] rounded-full bg-[#33D9EF] top-[-73px] sm:top-[-48px] xl:top-[-60px] 2xl:top-[-70px] left-32 sm:left-[223px] -z-10"></div>
          </div>
        </div>
        {/* second */}
        <div>
          <div className="font-bold max-xs:text-center w-full text-[22px] md992:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[36px] leading-[180%]">
            <span className="text-[#2F327D]">A</span>
            <span className="text-[#00CBB8]"> user interface</span>
            <span className="text-[#2F327D]"> designed for the classroom </span>
          </div>
          <div className="flex flex-col gap-7 4xl:gap-10 mt-6 md992:mt-10 xl:mt-[51px]">
            {teachingSteps.map((item) => (
              <div className="flex gap-5 3xl:gap-[42px] items-center">
                <div>
                  <img src={item.icon} />
                </div>
                <p className="text-[#696984] text-sm xl:text-base 3xl:text-lg 4xl:text-[22px] leading-[180%] tracking-[0.02em]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeturesPage;
