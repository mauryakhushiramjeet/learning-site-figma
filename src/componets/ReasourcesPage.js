import React from "react";
import smillingWoman from "../Assets/svgs/smilingWoman.svg";
import arrow from "../Assets/svgs/Arrow.svg";
import drop from "../Assets/svgs/drop.svg";
import star from "../Assets/svgs/Star.svg";
import laptop from "../Assets/svgs/laptopresource.svg";
import res1 from "../Assets/svgs/res1.svg";
import res2 from "../Assets/svgs/res2.svg";
import res3 from "../Assets/svgs/res3.svg";

const ReasourcesPage = () => {
  const newsCards = [
    {
      image: res1,
      badge: "PRESS RELEASE",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description: "Class Technologies Inc., the company that created Class,…",
    },
    {
      image: res2,
      badge: "NEWS",
      title:
        "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      description:
        "Zoom was never created to be a consumer product. Nonetheless, the…",
    },
    {
      image: res3,
      badge: "NEWS",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description:
        "This year, investors have reaped big financial returns from betting on Zoom…",
    },
  ];

  return (
    <div className="pt-11 md:pt-[58px] xl:pt-[100px] 4xl:pt-[129px] pb-11 sm:pb-5 lg:pb-10 2xl:pb-[76px] 4xl:pb-[115px] flex flex-col gap-10 sm:gap-[110px] xl:gap-[150px] ">
      <section
        className="pl-5 sm:pl-[30px] md:pl-10 lg:pl-[90px] xl:pl-[100px] 4xl:pl-[200px] pr-5 sm:pr-[70px] md:pr-[100px] lg:pr-[200px] 4xl:pr-[390px] flex sm:flex-row flex-col max-sm:text-center
    gap-[21px] md:gap-[80px] lg:gap-[100px] xl:gap-[164px] 2xl:gap-[70px] 4xl:gap-[158px]"
      >
        <div className="pr-[10px]">
          <div className="flex items-center max-sm:justify-center gap-[30px]">
            <div className="w-20 h-[1px] bg-[#525596]"></div>
            <span className="text-[#525596] text-[14px] lg:text-[18px] 2xl:text-[20px] font-nunitosans tracking-[20%]">
              TESTIMONIAL
            </span>
          </div>
          <p className="pt-5 2xl:pt-8 text-[#2F327D]  text-[22px] md992:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] 4xl:text-[60px] font-nunitosans font-bold">
            What They Say?
          </p>
          <p className="pt-5 2xl:pt-[29px] text-[#696984] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[26px] font-poppins 4xl:pr-[147px]">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>

          <p className="pt-5 2xl:pt-[29px] text-[#696984] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[26px] font-poppins 4xl:pr-[159px]">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="pt-5 2xl:pt-[46px] text-[#696984] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[26px] font-poppins">
            Are you too? Please give your assessment
          </p>
          <div className="relative  w-fit flex mt-[30px] md:mt-[43px] items-center justify-center max-sm:mx-auto">
            <button className="py-[13px] md:py-[15px] 2xl:py-[23px] border border-[#49BBBD] text-[#49BBBD] border-r-0 pl-[13px] md:pl-5 2xl:pl-[38px] pr-[63px] md:pr-20 2xl:pr-[114px] text-[12px] md:text-[14px] lg:text-[15px] 2xl:text-[22px] leading-[160%] rounded-[80px]">
              Write your assessment
            </button>
            <div className="absolute  h-[48px] md:h-[55px] 2xl:h-[82px] w-[48px] md:w-[55px] 2xl:w-20 rounded-full border border-[#49BBBD] flex items-center justify-center right-0">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="relative h-fit max-sm:flex max-sm:flex-col items-center justify-center max-sm:w-full ">
          <img
            src={smillingWoman}
            alt="smilling-woman"
            className="w-[300px] sm:w-full 4xl:w-[560px]"
          />
          <div className="h-[50px] sm:h-[55px] 3xl:h-[60px] 2xl:h-20  w-[50px] sm:w-[55px] 3xl:w-[60px] 2xl:w-20 hidden sm:flex items-center right-[-23px] sm:right-[-37px] 3xl:right-[-24px] 2xl:right-[-58px] absolute bottom-[400px] xs:bottom-[353px] sm:bottom-[142px] md:bottom-[159px] 2xl:bottom-[198px] justify-center rounded-full bg-white shadow-[0px_4px 60px_0px_#292C7C26]">
            <img src={drop} alt="drop" className="" />
          </div>
          <div className=" sm:absolute border-l-[10px] sm:border-l-[12px] md:border-l-[14px]  max-sm:mt-5 shadow-[2px_4px_60px_0px_#292C7C1A] left-[31px] lg:left-[55px] 2xl:left-[66px] 4xl:left-[52px] bottom-[-119px] md:bottom-[-86px]  4xl:bottom-[-167px] w-full sm:w-[285px] md:w-[326px] lg:w-[350px] xl:w-[400px] 2xl:w-[566px] 4xl:w-[680px] border-l-[#F67766] rounded-[20px] px-[15px] md:px-[25px] 4xl:px-0 4xl:pl-[73px] 4xl:pr-[59px] py-[10px] lg:py-[10px] 3xl:py-[15px] 2xl:py-5 4xl:py-[49px]  2xl:pb-[29px] pt-[5px] md:pt-[20px] 4xl:pt-[41px] bg-white">
            <p className="text-[#696984] text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] max-sm:text-center 4xl:text-[22px] leading-[180%] tracking-[0.02em] font-nunitosans text-left">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
            <div className="pt-[5px] md;pt-[10px] lg:pt-[3px] 3xl:pt-0 2xl:pt-[31px] flex items-center justify-between">
              <p className="text-[14px] lg:text-[18px] 2xl:text-[24px] text-[#5F5F7E] font-semibold font-nunitosans leading-[180%]">
                Gloria Rose
              </p>
              <div className="flex flex-col gap[5px] lg:gap-[10px] 3xl:gap-2 2xl:gap-[21px] items-center">
                <div className="flex gap-1">
                  {Array(5)
                    .fill(null)
                    .map((index) => (
                      <div className="w-fit">
                        <img src={star} />
                      </div>
                    ))}
                </div>
                <p className="text-[14px] 3xl:text-[16px] 2xl:text-[18px] text-[#80819A] font-nunitosans font-semibold leading-[180%]">
                  12 reviews at Yelp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="4xl:pl-[200px] 4xl:pr-[163px] px-5 sm:px-10 lg:px-[50px] xl:px-[100px] 4xl:px-0">
        <div className="flex items-center justify-center text-center gap-[5px] 2xl:gap-[10px] 4xl:gap-5 flex-col">
          <p className="text-[21px] xs:text-[24px] lg:text-[28px] 2xl:text-[36px] text-[#2F327D] font-bold leading-[180%] font-nunitosans">
            Lastest News and Resources
          </p>
          <p className="text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#696984] leading-[180%] font-nunitosans">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>
        <div className="mt-[25px] xs:mt-10 lg:mt-[60px] 2xl:mt-20 4xl:mt-[100px] flex flex-col lg:flex-row gap-[50px] xl:gap-[73px] 2xl:gap-[120px]">
          {/* card 1 */}
          <div className="lg:max-w-[350px] xl:max-w-[400px] 3xl:max-w-[519px] 4xl:max-w-[640px] flex lg:flex-col sm:flex-row flex-col max-lg:gap-5 items-center">
            <div>
              <img src={laptop} alt="laptop-image" />
            </div>

            <div className="lg:mt-[25px] xl:mt-[42px] flex flex-col gap-[3px] md:gap-3 4xl:gap-5 items-start">
              <button className="text-[#FFFFFF] text-[14px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] tracking-[0.02em] bg-[#49BBBD] rounded-[80px] px-6 2xl:px-[36px] py-[2px] w-fit">
                NEWS
              </button>
              <p className="text-[#252641] text-[14px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[26px] font-medium 2xl:pr-[13px] leading-[180%]">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </p>
              <p className="text-[#696984] text-[13px] md:text-[14px] 2xl:text-[20px] tracking-[0.02em] 2xl:pr-[60px] leading-[180%]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <button className="text-[#696984] text-[14px] 2xl:text-[20px] md:pt-1 4xl:pt-2 underline leading-[180%]">
                Read more
              </button>
            </div>
          </div>
          {/* card2 */}
          <div className="lg:flex flex-row lg:flex-col max-lg:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-[25px] lg:gap-10 2xl:gap-[50px]">
            {newsCards.map((news, index) => (
              <div
                className="flex lg:flex-row flex-col gap-[15px] lg:gap-[25px] 2xl:gap-10 items-center max-lg:shadow-xl max-lg:p-2"
                key={index}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-full">
                    <img
                      src={news.image}
                      className="w-full lg:w-[228px] 2xl:w-full obeject cover"
                    />
                  </div>
                  <button className="absolute py-1 px-[14px] 2xl:px-[26px] text-sm 2xl:text-lg bg-[#49BBBD] rounded-[80px] text-white bottom-[10px] 2xl:bottom-5 right-[10px] 2xl:right-5">
                    {news.badge}
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-[10px] lg:gap-1 xl:gap-5">
                    <p className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] text-[#252641] font-medium leading-[180%]">
                      {news.title}
                    </p>
                    <p className="text-[#696984] text-[13px] lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px] leading-[180%]">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReasourcesPage;
