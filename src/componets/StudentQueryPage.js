import React from "react";
import studendQuery from "../Assets/svgs/studenQuery.svg";
import image2 from "../Assets/svgs/roundimage4.svg";
import image3 from "../Assets/svgs/roundimage4.svg";
import image4 from "../Assets/svgs/rounimage1.svg";
import image5 from "../Assets/svgs/rounimage2.svg";
import twiter from "../Assets/svgs/twitter.svg";
import facebook from "../Assets/svgs/facebook.svg";
import insta from "../Assets/svgs/instagram.svg";

const StudentQueryPage = () => {
  const student = [image2, image3, image4, image5];
  const socialMediaIcons = [twiter, facebook, insta];
  return (
    <div className="py-6 sm:py-10 md:py-14 lg:py-16 2xl:py-[70px] 4xl:pt-[80px] 4xl:pb-[70px] px-5 xxs:px-3 sm:px-10 bg-[#9DCCFF] md:px-5 lg:px-[70px] xl:px-[139px] bg-opacity-20">
      <div className="lg:py-10 3xl:py-16 2xl:pt-[70px] pb-2 lg:pb-5 2xl:pb-10 4xl:pb-[80px]">
        <p className="font-medium text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px] tracking-[0.03rem] w-fit ">
          What our students have to say
        </p>
        <div className="rounded-3xl 2xl:rounded-[40px] bg-[#FFFFFF]  mt-6 lg:mt-7 xl:mt-12 2xl:mt-14 4xl:mt-[70px]">
          <div className="pt-5 md:pt-10 2xl:pt-[69px] pb-5 md:pb-[45px] max-xs:px-2  xs:pl-[30px] lg:pl-[66px] 4xl:pl-[106px] xs:pr-7 lg:pr-[40px] 4xl:pr-[61px] flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-[70px] 4xl:gap-[113px] ">
            <div className="md:flex-shrink-0 max-md:w-full  max-md:flex max-md:items-center max-md:justify-center">
              <img
                src={studendQuery}
                className="w-[260px] lg:w-[300px] 2xl:w-[400px] 4xl:w-full"
              />
            </div>
            <div className="pt-10 2xl:pt-[53px] flex-1 ">
              <div className="flex justify-between xs:gap-10 md:gap-[26px] xl:gap-28 4xl:gap-[236px]">
                <div className="flex flex-col gap-5 sm:gap-3 2xl:gap-5 4xl:gap-[31px]">
                  <p className="text-[#252641]  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-xl 2xl:text-[30px] font-bold">
                    Savannah Nguyen
                  </p>
                  <div className="flex flex-col gap-2 2xl:gap-[19px]">
                    <p className="text-base xl:text-lg 2xl:text-xl 4xl:text-2xl font-medium">
                      tanya.hill@example.com
                    </p>
                    <div className="text-[#696984] text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-lg max-xs:pr-2">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor Lorem <br />
                      ipsum dolor sit amet, consectetur adipising elit, sed do
                      eiusmod tempor <br />
                      Lorem ipsum dolor sit amet,consectetur adipising elit, sed
                      do eiusmod tempor
                    </div>
                  </div>
                  <div className="flex gap-[25px] items-center">
                    {socialMediaIcons.map((menu) => (
                      <div>
                        <img src={menu} alt="menu" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-[45px] xs:pt-[17px] 4xl:pt-[73px] flex flex-col gap-5 4xl:gap-[25px] items-center">
                  {student.map((image, i) => (
                    <div>
                      <img src={image} className="rounded-full " />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentQueryPage;
