import React from "react";

const SuccessPage = () => {
  const stats = [
    {
      value: "15K+",
      label: "Students",
    },
    {
      value: "75%",
      label: "Total success",
    },
    {
      value: "35",
      label: "Main questions",
    },
    {
      value: "26",
      label: "Chief experts",
    },
    {
      value: "16",
      label: "Years of experience",
    },
  ];

  return (
    <div className="px-3 xs:px-5 sm:px-10 md:px-[60px] xl:px-[100px] 4xl:px-[197px] mt-[50px] lg:mt-[70px] 2xl:mt-[100px]  4xl:mt-[134px]">
      <div className="flex flex-col items-cente">
        <div className="flex flex-col items-center leading-[120%] lg:leading-[130%] gap-2 4xl:gap-4">
          <p className="text-[#010514] text-[30px]  md:text-[32px] xl:text-[38px] 3xl:text-[30px] leading-[130%] 4xl:text-[48px] font-semibold sm:font-bold">
            Our Success
          </p>
          <p className=" text-[#010514CC] text-[12px] xl:text-[14px] 2xl:text-[16px] 4xl:text-[18px] mt-2 2xl:mt-4 text-center px-[10px] sm:px-[50px] leading-[180%]">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a
            quis ultrices eu ornare tristique vel nisl orci.{" "}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-evenly lg:justify-between mt-10  sm:mt-[50px] 3xl:mt-[70px] 2xl:mt-20 4xl:mt-[101px] w-full max-xs:gap-[30px] max-lg:gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <p className="text-[55px] md:text-[53px] xl:text-[85px] 3xl:text-[65px] 2xl:text-[85px] 4xl:text-[96px] font-light bg-clip-text bg-text-gradient text-transparent">
                {item.value}
              </p>
              <p className="text-[#010514CC] text-[14px] sm:text-[16] lg:text-[18] xl:text-[20px] 2xl:text-[24px] 4xl:text-[32px] leading-[130%]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
