import React from "react";
import managemenetImage from "../Assets/svgs/managementImage.svg";
import dissimage from "../Assets/svgs/Discussions.svg";
const ManagementPage = () => {
  return (
    <div className="flex flex-col gap-[50px]  xl:gap-20 4xl:gap-[145px]">
      <section className="flex flex-col sm:flex-row px-5 sm:px-[30px] md:px-10 lg:px-[90px] xl:px-[100px] 3xl:px-[150px] 4xl:px-0 4xl:pl-[150px] 4xl:pr-[225px] pt-[65px] 3xl:pt-20 4xl:pt-[175px] gap-[10px] md:gap-10 lg:gap-[60px] xl:gap-[90px] items-center">
        <div className="flex flex-col w-fit">
          <div className="font-semibold max-sm:text-center w-full text-[22px] md992:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[40px] leading-[160%]">
            <span className="text-[#00CBB8]">
              Class Management <br className="sm:block hidden" />
            </span>
            <span className="text-[#2F327D]"> Tools for Educators</span>
          </div>
          <p className="text-[#696984] text-sm xl:text-base 3xl:text-lg max-sm:text-center sm:pr-10  4xl:pr-[111px] 4xl:text-[22px] leading-[180%] tracking-[0.02em] mt-5">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="w-full">
          <img
            src={managemenetImage}
            alt="management image"
            className="w-full"
          />
        </div>
      </section>
      <section className="flex gap-5 sm:gap-10 2xl:gap-[80px] 4xl:gap-[120px] flex-col items-center justify-between">
        {" "}
        <div className="flex flex-col-reverse sm:flex-row gap-5 sm:gap-[50px] md:gap-[70px] xl:gap-[130px] 2xl:gap-[190px] px-5 sm:px-10 lg:px-[90px] xl:px-[100px] 4xl:px-0 4xl:pr-[243px] 4xl:pl-[191px] items-center">
          <div className="w-full">
            <img src={dissimage} alt="dissImage" />
          </div>
          <div className="flex flex-col w-full">
            <div className="font-semibold max-sm:text-center w-full text-[22px] md992:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[40px] leading-[160%]">
              <span className="text-[#00CBB8]">
                One-on-One <br className="sm:block hidden" />
              </span>
              <span className="text-[#2F327D]"> Discussions</span>
            </div>
            <p className="text-[#696984] text-sm xl:text-base 3xl:text-lg max-sm:text-center lg:pr-10 4xl:text-[22px] leading-[180%] tracking-[0.02em] mt-5">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
        <div>
          <button className="px-[10px] xs:px-[16px] md:px-[25px] 2xl:px-[30px] 4xl:px-[38px] py-[6px] xs:py-2 md:py-3 2xl:py-[15px] 4xl:py-[19px] border text-[#49BBBD] text-[12px] xs:text-[14px] xl:text[16px] 2xl:text-[20px] 4xl:text-[24px] leading-[180%] tracking-[0.02em] border-[#49BBBD] rounded-[80px] ">
            See more features
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
