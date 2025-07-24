import React from "react";
import image3 from "../Assets/svgs/image 3.svg";
import image4 from "../Assets/svgs/image42.svg";
import image5 from "../Assets/svgs/image5.svg";
const Creators = () => {
  const details = [
    {
      image: image5,
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: image3,
      name: "Adam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: image4,
      name: "Tomara",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: image5,
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: image5,
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: image5,
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <div className=" py-6 sm:py-10 md:py-14 lg:py-16 2xl:py-[70px] 4xl:pt-[90px] 4xl:pb-[80px] px-5 xxs:px-3 sm:px-10 md:px-5 lg:px-[70px] xl:px-[139px]">
      <div className="flex justify-between items-center max-xxs:gap-3">
        <p className="font-medium text-[#000000]  text-sm sm:text-base md:text-lg w-fit lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px] text-left xxs:[letter-spacing:0.02em]">
          Classes tought by real creators
        </p>
        <p className="text-[#49BBBD] text-sm lg:text-lg 2xl:text-xl font-bold">
          See all
        </p>
      </div>
      <div className="mt-[135px] xl:mt-[188px] grid-cols-1 xs:grid-cols-2 grid xl:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-[124px] sm:gap-y-[186px] ">
        {details.map((d, index) => (
          <div
            key={index}
            className="py-20 sm:pt-[104px] 2xl:pt-[143px] w-full 4xl:pt-[161px] relative flex bg-[#FFFFFF] flex-col gap-x-[21px]  gap-[9px] 4xl:gap-[21px] items-center justify-center px-4 3xl:px-12 4xl:px-[69px] pb-[30px] shadow-[2px_2px_10px_2px_#00000040]"
          >
            <div className="absolute top-[-70px] sm:top-[-92px] 2xl:top-[-135px] 4xl:top-[-138px] left-[60px] xs:left-[33px] sm:left-[51px] md:left-[85px] lg:left-[116px] xl:left-[65px] 3xl:left-[81px] 2xl:left-[80px]  4xl:left-[120px] ">
              <img
                src={d.image}
                alt=" absolute"
                className="creatorsImage w-[160px] xs:w-[130px] sm:w-[165px] 2xl:w-[230px] 4xl:w-[278px] h-[130px] sm:h-[165px] 2xl:h-[230px] 4xl:h-[277px]"
              />
            </div>
            <p className=" text-lg lg:text-xl 2xl:text-2xl text-[#252641] font-medium">
              {d.name}
            </p>
            <p className="text-[#696984] text-[13px] md:text-sm lg:text-sm 2xl:text-lg text-center">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creators;
