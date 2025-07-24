import React from "react";
import logo from "../Assets/svgs/navlogo.svg";
const Footer = () => {
  return (
    <div className="">
      <div className="pt-7 sm:pt-5 lg:pt-10 2xl:pt-[74px] bg-[#252641] pb-7 lg:pb-10 2xl:pb-10 flex px-2 xxs:px-5 flex-col justify-center items-center">
        <div className="flex items-center ">
          <div className="border-r border-r-[#626381] pr-5 xxs:pr-16 lg:pr-[77px]">
            <img src={logo} />
          </div>

          <p className="text-white font-semibold text-base sm:text-lg lg:text-[22px] ml-5 xxs:ml-[41px]">
            Virtual Class
            <br /> for Zoom
          </p>
        </div>
        <div className="mt-10 md:mt-[60px] 4xl:mt-[95px] flex flex-col items-center">
          <p className="text-[#B2B3CF] text-sm sm:text-lg 2xl:text-2xl 4xl:text-[26px] font-medium">
            Subscribe to get our Newsletter
          </p>
          <div className="flex gap-2 sm:gap-4 2xl:gap-5 items-center mt-5 sm:mt-3 md:mt-5 relative">
            <input
              type="text"
              className="pl-4 2xl:pl-[30px] pr-28 xxs:pr-10 sm:pr-14 2xl:pr-[258px] rounded-[80px] text-sm xxs:text-base lg:text-lg 2xl:text-xl py-2 sm:py-[10px] 2xl:py-[15px] text-[#83839A] bg-transparent outline-none border border-[#839A83]"
              placeholder="Your Email"
            />
            <button className=" max-xxs:right-0 max-xxs:absolute px-2 xxs:px-[15px] sm:px-7 lg:px-[34px] py-2 sm:py-[10px] 2xl:py-[14px] text-[#FFFFFF] text-sm xxs:text-base lg:text-lg 2xl:text-[22px] font-medium rounded-[60px] bg-[#49BBBD]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-[#B2B3CF] text-sm sm:text-base lg:text-lg 2xl:text-[22px] flex flex-col gap-5 xxs:gap-3 2xl:gap-5 mt-12 lg:mt-14 4xl:mt-[96px] items-center">
          <div className="flex flex-col xs:flex-row items-center justify-between gap-2 xs:gap-5">
            <p>Careers</p>
            <p className="px-2 xxs:px-5 xs:border-l border-l-[#839A83] xs:border-r border-r-[#839A83]">
              Privacy Policy
            </p>
            <p className="">Terms & Conditions</p>
          </div>
          <p className="text-center">© 2021 Class Technologies Inc. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
