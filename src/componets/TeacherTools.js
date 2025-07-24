import React from "react";
import teachettolimage1 from "../Assets/svgs/TeacherTool1.svg";
import teachettolimage2 from "../Assets/svgs/toolimage2.svg";
import arrow from "../Assets/svgs/ArrowTeacherTool.svg";
import cross from "../Assets/svgs/cross.svg";
import check from "../Assets/svgs/check.svg";

const TeacherTools = () => {
  return (
    <div className="flex gap-8 xl:gap-20 2xl:gap-[100px] 4xl:gap-[160px] flex-col">
      <section className="px-5  xs:px-14 lg:px-[90px] xl:px-[100px] 4xl:px-[239px]">
        <div className="flex items-center flex-col sm:flex-row justify-center">
          <div className="flex items-center flex-col justify-center">
            <div className="font-semibold max-sm:text-center w-full text-[22px] md992:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[40px] leading-[160%]">
              <span className="text-[#00CBB8]">Tools</span>
              <span className="text-[#2F327D]">
                {" "}
                For Teachers <br className="sm:block hidden" /> And Learners
              </span>
            </div>
            <div className="flex flex-col gap-7 4xl:gap-10 mt-5">
              <p className="text-[#696984] text-sm xl:text-base 3xl:text-lg max-sm:text-center sm:pr-20 xl:pr-[111px] 4xl:text-[22px] leading-[180%] tracking-[0.02em]">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
              {/* </div> */}
            </div>
          </div>
          <div className="w-full max-sm:mt-5 flex items-center justify-center">
            <img
              src={teachettolimage1}
              alt="teacher-tool-image"
              className="w-[360px] sm:w-[100%]"
            />
          </div>
        </div>
      </section>
      <section className="flex max-sm:gap-10 max-md:gap-20  md:max-lg:gap-16 justify-between px-5 sm:px-[31px] md:px-10 lg:px-[90px] xl:px-[100px] 3xl:px-[150px] 4xl:px-[267px] items-center py-[25px] flex-col-reverse sm:flex-row">
        <div className="shadow-[0px_9.1px_43.69px_0px_#282B6F1A] bg-white  rounded-[18px] p-5 sm:p-[30px] 2xl:p-[38px] pr-0 w-full max-w-[316px] sm:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[465px] relative h-[350px] md:h-[412px] xl:h-[484px] 2xl:h-[562px] mt-5 ">
          <div className="absolute right-[-11px] top-[-38px] sm:top-[-56px]">
            <img
              src={cross}
              alt="cross"
              className="w-[95px] sm:w-[130px] xl:w-full"
            />
          </div>
          <div className="absolute right-[-25px] xs:right-[-40px] sm:right-[-23px] xl:right-[-67px] top-[-3px]  sm:top-[-15px]">
            <img
              src={check}
              alt="right"
              className="w-[95px] sm:w-[130px] xl:w-full"
            />
          </div>

          <div className="w-[22px] h-[22px] bg-[#F3A268] rounded-full absolute top-[-41px] left-[71px]"></div>
          <div className="absolute w-[50px] sm:w-[75px] xl:w-[99px] h-[50px] sm:h-[75px] xl:h-[99px] rounded-full bg-[#5B61EB] top-[-18px] left-[-23px] sm:left-[-33px] xl:left-[-45px] -z-10"></div>
          <div className="w-4 h-4 bg-[#F3538C] rounded-full absolute top-[317px] right-[-69px] sm:block hidden"></div>
          <div className="w-[19px] h-[19px] bg-[#F3A268] rounded-full absolute bottom-[-36px] left-0"></div>

          <div className="flex flex-col">
            <button className="px-[15px] sm:px-[33px] py-1 sm:py-[6px] text-[#717FB0] bg-[#CDD8FF] rounded-[72px] w-fit text-sm lg:text-lg 2xl:text-lg 4xl:text-xl">
              Question 1
            </button>
            <p className="text-[#55578D] text-[14px] sm:text-[16px] md:text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold leading[160%] pr-0 md:pr-6 pt-[17px] sm:pt-6 xl:pt-10">
              True or false? This play <br></br> takes place in Italy
            </p>
            <div className="bg-white">
              <div className="absolute w-full bottom-[73px] xs:bottom-[28px] lg:bottom-[38px] max-xs:px-[10px] max-xs:right-0">
                {" "}
                <img
                  src={teachettolimage2}
                  alt="image-2"
                  className="w-full max-w-[465px]"
                />
              </div>
              <div
                className=" py-[10px] lg:py-[15px] 2xl:py-[26px] px-[15px] 2xl:px-[28px] flex flex-row gap-[11px] xl:gap-7 items-center  absolute bg-white rounded-[18px] bottom-[-16px] lg:bottom-[-38px] xs:right-[-43px] sm:right-[-80px] justify-center max-xs:left-[17px]
                right-[17px]"
              >
                <div>
                  <img
                    src={arrow}
                    alt="arrow
              "
                    className="w-[50px] sm:w-[70px] xl:w-full"
                  />
                </div>
                <div className="relative max-w-[120px] sm:max-w-[150px] xl:max-w-[190px]">
                  <p className="font-semibold text-[#41BE90] text-[13px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-[160%] z-10 relative">
                    Your answer was sent successfully
                  </p>
                  <div className="xs:block hidden h-[38px] w-[38px] rounded-full bg-[#D8F9ED] absolute right-[28px] 2xl:right-0 top-[26px] 2xl:top-[33px] z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit max-sm:w-full max-sm:flex flex-col items-center max-sm:text-center">
          <div className="font-semibold max-xs:text-center 4xl:max-w-[347px] w-full text-[20px] sm:text-[21px] md992:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[40px] leading-[160%]">
            <p className="text-[#2F327D]">
              Assessments,
              <span className="text-[#00CBB8]"> Quizzes</span>, Tests
            </p>
          </div>
          <div className="flex flex-col gap-7 4xl:gap-10 mt-5">
            <div className="flex gap-5 3xl:gap-[42px] items-center">
              <p className="text-[#696984] text-sm xl:text-base 3xl:text-lg 4xl:text-[22px] leading-[180%] tracking-[0.02em]">
                Easily launch live assignments, quizzes, and{" "}
                <br className="lg:block hidden" /> tests. Student results are
                automatically entered in <br className="lg:block hidden" /> the
                online gradebook.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherTools;
