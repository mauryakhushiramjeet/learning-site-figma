import React from "react";
import girlImage from "../Assets/svgs/girl.svg";
import watch from "../Assets/svgs/watchHero.svg";
import calender from "../Assets/svgs/calender.svg";
import notesImage from "../Assets/svgs/heroIconsImages.svg";
import dots from "../Assets/svgs/dotsImage.svg";
import email from "../Assets/svgs/email.svg";
import icon from "../Assets/svgs/heroIcons.svg";
const HeroPage = () => {
  return (
    <>
     
      <div className="max-md:bg-[#26B2B4] md:bg-bgHero bg-bottom bg-cover overflow-hidden relative max-md:h-fit max-lg:h-[380px]">
        <div className=" max-xs:px-5 max-md:px-12 md:pl-[43px] md992:pl-[112px] lg:pl-20 xl:pl-[106px] 2xl:pl-[140px] md:pr-[64px] md992:pr-[149px] lg:pr-20 xl:pr-[150px] 3xl:pr-[100px] 2xl:pr-[118px] flex md:gap-[98px] md992:gap-[140px] lg:gap-[141px] 3xl:gap-[179px] 2xl:gap-[211px] 4xl:gap-[267px] flex-col md:flex-row">
          <div className="md:flex-shrink-0 pt-12 md:pt-20 xl:pt-[117px] 2xl:pt-[159px] 4xl:pt-[222px] max-md:flex max-md:flex-col justify-center items-center">
            <p className="text-xl xs:text-2xl sm:text-[28px] md:text-2xl lg:text-[30px] xl:text-[40px] 4xl:text-[54px] font-bold max-md:text-center text-white leading-[32px] sm:leading-[38px] lg:leading-[44px] xl:leading-[60px] 4xl:leading-[70px]">
              <span className="text-[#F48C06]">Studying</span> Online is now{" "}
              <br className="hidden md:block" /> much easier
            </p>
            <p className="text-base sm:text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-2xl text-[#FFFFFF] pt-[15px] xl:pt-5 2xl:pt-6 4xl:pt-[34px] font-nunitosans max-sm:leading-[150%] 4xl:leading-[160%] max-md:text-center ">
              TOTC is an interesting platform that will teach{" "}
              <br className="hidden sm:block" /> you in more an interactive way
            </p>
            <div className="pt-5 md:pt-4 lg:pt-5 xl:pt-11 2xl:pt-7 4xl:pt-[52px] flex flex-col xs:flex-row items-center">
              <button className="rounded-[80px] text-base md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-medium lg:font-semibold text-white px-5 md:px-[10px] lg:px-3 xl:px-5 2xl:px-[38px] bg-opacity-[30%] py-2 xs:py-[10px] md:py-[6px] lg:py-3 2xl:py-5 4xl:py-[22px] bg-[#FFFFFF4D]">
                Join for free
              </button>
              <div className="flex items-center max-xs:pt-2">
                <button className="p-[10px] lg:p-3 2xl:p-4 4xl:p-6 bg-white rounded-full ml-2 lg:ml-5 2XL:ml-6 4xl:ml-10 flex items-center justify-center">
                  <img
                    src={watch}
                    className="max-lg:w-[10px] max-xs:w-[15px] max-2xl:w-[20px]"
                  />
                </button>
                <p className="text-sm xl:text-base 2xl:text-[22px] 4xl:text-2xl text-[#252641] ml-2 lg:ml-5 2xl:ml-6 4xl:ml-8">
                  Watch how it works
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex-1 pt-0 xl:pt-3 2xl:pt-[60px] 4xl:pt-[111px] ">
            <div className="relative">
              <div className="py-2 md:py-1 lg:py-2 2xl:py-[10px] 4xl:py-[15px] px-2 md:px-1 lg:px-2 2xl:px-[13px] 4xl:px-7 hidden xs:flex gap-1 2xl:gap-[11px] 4xl:gap-8 bg-[#FFFFFFCC] bg-opacity-[80%] w-fit rounded-[10px] md:rounded-md lg:rounded-xl xl:rounded-2xl 2xl:rounded-[20px] absolute top-[80px] sm:top-[150px] md:top-[105px] lg:top-[146px] 3xl:top-[187px] 2xl:top-[200px] left-[-8px] sm:left-[27px] md:left-[-55px] 3xl:left-[-44px] 2xl:left-[-108px] 4xl:top-[257px] items-center">
                <div>
                  <img
                    src={calender}
                    alt="calender-image"
                    className="max-md:w-[30px] max-lg:w-6 max-4xl:w-[30px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm sm:text-base 3xl:text-lg 2xl:text-xl 4xl:text-[28px] text-[#595959] tracking-">
                    250k
                  </p>
                  <p className="text-[#545567] font-nunitosans font-semibold text-xs xl:text-sm 2xl:text-base 4xl:text-xl xl:leading-[180%]">
                    Assisted Student
                  </p>
                </div>
              </div>
              {/* second */}
              <div className="p-2 md:p-1 lg:p-2 max-lg:pt-[10px] 2xl:p-[10px] 4xl:p-7 hidden xs:flex gap-2 2xl:gap-4 4xl:gap-[23px] bg-[#FFFFFFCC] bg-opacity-[80%] w-fit rounded-[10px] md:rounded-xl xl:rounded-2xl 2xl:rounded-[20px] absolute left-[-37px] sm:left-[23px] md:left-[-89px] lg:left-[-65px] xl:left-[-72px] 3xl:left-[-61px] 2xl:left-[-91px] bottom-[52px] sm:bottom-[124px] md:bottom-[67px] lg:bottom-[89px] xl:bottom-[103px] 3xl:bottom-[143px] 2xl:bottom-[160px] 4xl:bottom-[187px]">
                <div className="relative">
                  <img
                    src={notesImage}
                    alt="notes-image"
                    className="w-[30px] lg:w-10 2xl:w-[48px] 4xl:w-full"
                  />
                  <div className="absolute top-5 lg:top-[30px] 2xl:top-[39px] left-5 lg:left-6 2xl:left-[37px]">
                    {" "}
                    <img src={dots} alt="dot" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 4xl:gap-[19px] font-nunitosans items-start justify-between">
                  <div className="text-[#595959]">
                    <p className="font-bold text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg 2xl:text-xl 4xl:text-2xl ">
                      User Experience Class
                    </p>
                    <p className="font-semibold text-xs xl:text-sm 2xl:text-base 4xl:text-xl lg:leading-[180%]">
                      Today at 12.00 PM
                    </p>
                  </div>
                  <button className="py-[2px] lg:py-1 4xl:py-3 w-fit px-[13px] lg:px-5 2xl:px-7 4xl:px-12 rounded-[80px] text-white text-sm lg:text-base 2xl:text-lg 4xl:text-xl font-bold bg-[#D8587E]">
                    Join Now
                  </button>
                </div>
              </div>
              {/* third */}
              <div className="p-2 2xl:p-[10px] 4xl:p-5 hidden xs:flex gap-2 2xl:gap-3 4xl:gap-6 font-nunitosans bg-[#FFFFFFCC] bg-opacity-[80%] w-fit rounded-[10px] md:rounded-xl xl:rounded-2xl 2xl:rounded-[20px] absolute top-[163px] sm:top-[264px] md:top-[174px] md992:top-[199px] lg:top-[237px] xl:top-[269px] 3xl:top-[323px] 2xl:top-[353px] 4xl:top-[483px] right-[-29px] sm:right-[31px] md:right-[-45px] md992:right-[-73px] lg:right-[-45px] xl:right-[-94px] 3xl:right-[-53px] 2xl:right-[-76px] 4xl:right-[-22px]">
                <div className="bg-[#F88C3D] rounded-lg h-fit">
                  <img
                    src={email}
                    alt="calender-image"
                    className="p-[5px] xl:p-2 2xl:p-[10px] max-xl:w-[30px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg 2xl:text-xl 4xl:text-2xl text-[#595959] tracking-">
                    Congratulations
                  </p>
                  <p className="text-[#545567]  font-semibold text-xs xl:text-base 2xl:text-lg 4xl:text-xl leading-[180%]">
                    Your admission completed{" "}
                  </p>
                </div>
              </div>
              {/* forth */}
              <div className="absolute top-[55px] sm:top-[96px] md:top-[70px] right-[50px] sm:right-[61px] md:right-[17px] lg:top-[86px] xl:top-[97px] 2xl:top-[130px] 4xl:top-[178px]">
                <img
                  src={icon}
                  alt="icon"
                  className="w-[70px] xl:w-[90px] 2xl:w-[119px] 4xl:w-[100%]"
                />
                {/* max-w-[67px] max-md:w-[102px] max-lg:w-[56px] max-xl:w-[70px] max-4xl:w-[88px] w-full */}
              </div>
              <div className="max-md:flex w-full justify-center">
                <img
                  src={girlImage}
                  alt="girl-image"
                  className="max-sm:w-[250px] max-md:w-[404px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-52px] lg:bottom-[-57px] 4xl:bottom-[-44px] w-full  hidden md:block">
          {" "}
          <svg
            width="100%"
            height="150"
            viewBox="0 0 1440 150"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 Q720,200 1440,0 L1440,150 L0,150 Z" fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroPage;

