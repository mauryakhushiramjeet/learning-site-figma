import React from "react";
import calender from "../Assets/svgs/calender2.svg";
import file from "../Assets/svgs/file.svg";

import profile from "../Assets/svgs/groupProfile.svg";

const CloudSoftwarePage = () => {
  const features = [
    {
      icon: file,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: calender,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: profile,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skillline’s built-in system helps organize your organization",
    },
  ];

  return (
    <div className="px-5 xs:px-10 lg:px-[90px] xl:px-[100px] 4xl:px-[225px] pt-[70px] sm:pt-[66px] 3xl:pt-[100px] 4xl:pt-[131px] pb-10 xl:pb-[70px] sm:pb-10 md:pb-[58px] 2xl:pb-[80px] 4xl:pb-[158px]">
      <div className="flex flex-col items-center gap-3 4xl:gap-5">
        <div className="font-bold text-[20px] xs:text-[22px] lg:text-[28px] 2xl:text-[36px] leading-[160%] text-center">
          <spn className="text-[#2F327D]"> All-In-One</spn>{" "}
          <span className="text-[#00CBB8]">Cloud Software</span>
        </div>
        <p className="text-[14px] 2xl:text-[22px] 4xl:text-[24px] leading-[180%] text-center text-[#696984]">
          TOTC is one powerful online software suite that combines all the tools
          <br />
          needed to run a successful school or office.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 3xl:gap-[60px] mt-[50px] 3xl:mt-[60px] 2xl:mt-20 4xl:mt-[103px]">
          {features.map((item, index) => (
            <div
              className="flex flex-col items-center gap-0 sm:gap-3 md::gap-5 2xl:gap-[50px] 4xl:gap-[79px] px-5 2xl:px-0"
              key={index}
            >
              <div className="w-20 xl:w-[100px] h-20 xl:h-[100px]">
                <img src={item.icon} alt="icon" className="" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6 text-center">
                <p className="text-[#2F327D] text-lg xl:text-[20px] 2xl:text-2xl 4xl:text-[28px] 4xl:text-3xl font-medium 2xl:px-[46px]">
                  {item.title}
                </p>
                <p className="text-[#696984] text-[14px] xl:text-[16px] 2xl:text-[20px] leading-[180%] pb-5 2xl:pb-[50px] 2xl:px-[29px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudSoftwarePage;
