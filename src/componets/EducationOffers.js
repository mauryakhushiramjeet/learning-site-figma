import React from "react";
// import bg1 from "../Assets/svgs/bg1.svg";
// import bg2 from "../Assets/svgs/bg2.svg";
// import bg3 from "../Assets/svgs/bg3.svg";
const EducationOffers = () => {
  const educationOffers = [
    { id: 1, bgClass: "bg-EducationOfferbg1", percentage: "50%" },
    { id: 2, bgClass: "bg-EducationOfferbg3", percentage: "10%" },
    { id: 3, bgClass: "bg-EducationOfferbg2", percentage: "50%" },
  ];

  return (
    <div className="px-5 xxs:px-3 sm:px-10 md:px-5 lg:px-[70px] xl:px-[139px] pt-3 sm:pt-5 lg:pt-10 2xl:pt-[70px] pb-11 sm:pb-5 lg:pb-10 2xl:pb-[76px]">
      <div className="flex justify-between max-xs:gap-5">
        <p className="font-medium text-[#000000] text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px]  ">
          Top Education offers and deals are listed here
        </p>
        <p className="text-[#49BBBD] text-xs lg:text-lg 2xl:text-xl font-bold text-nowrap">
          See all
        </p>
      </div>
      <div className="mt-8 2xl:mt-14 4xl:mt-[70px] grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 gap-5 md:gap-10 xl:gap-12 2xl:gap-[72px]">
        {educationOffers.map((offers) => (
          <div
            className={`${offers.bgClass} rounded-[20px] bg-center bg-no-repeat bg-cover`}
          >
            <div className="py-[25px] 2xl:py-[45px] pl-5 xl:pl-[35px] 2xl:pl-[45px] flex flex-col text-white pr-5 2xl:pr-10 4xl:pr-[102px]">
              <div className="w-20 xs:w-[100px] md:w-[124px] py-[15px] 4xl:py-[25px] px-[15px] font-bold text-lg xs:text-3xl sm:text-2xl md:text-4xl 2xl:text-[50px] bg-[#49BBBD] rounded-[10px] flex items-center justify-center">
                {offers.percentage}
              </div>
              <p className="mt-4 xl:mt-5 2xl:mt-7 font-bold text-xl 2xl:text-2xl 2xl:text-[28px]">
                Lorem ipsum dolor
              </p>
              <div className="mt-[9px] text-sm xs:text-base 2xl:text-lg 4xl:text-xl font-medium">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationOffers;
