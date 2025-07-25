import React from "react";
import moonImage from "../../Assets/svgs/moon-image.webp";
import star from "../../Assets/svgs/Star.svg";
const BookCard = ({ image }) => {
  return (
    <div
      className={`p-2 lg:p-3 2xl:p-5 bg-white rounded-[15px] lg:rounded-[20px] 2xl:rounded-[40px] w-[200px] md:w-full max-w-[200px]
         lg:max-w-[244px] xl:max-w-[389px] 2xl:max-w-[500px] 4xl:max-w-[684px] border-2 max-4xl:mx-[20px] `}
    >
      <div className="flex gap-1 xl:gap-[15px] 4xl:gap-10 flex-col xl:flex-row ">
        <div className="h-full">
          <img
            src={image}
            alt="moon-image"
            className="rounded-[15px] lg:rounded-[20px] 2xl:rounded-[40px] w-[219px] xl:w-[362px] 2xl:w-[428px] 4xl:w-[536px] h-[85px] lg:h-[120px] xl:h-[229px] 2xl:h-[307px] 4xl:h-[368px] object-cover"
          />
        </div>
        <div className="flex gap-[2px] xl:gap-2 2xl:gap-[10px] flex-col items-start">
          <p className="text-blck text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] 4xl:text-[36px] font-semibold leading-[162%] opacity-[74%]">
            Integer id Orc Sed Ante Tincidunt
          </p>
          <p className="text-[13px] lg:text-[14px] 2xl:text-[20px] 4xl:text-[26px] text-blac opacity-[47%]">
            Cras convallis lacus orci, tristique tincidunt magna fringilla at
            faucibus vel.
          </p>
          <div className="flex gap-[15px] 4xl:gap-10 items-center">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((index) => (
                  <div className="w-fit">
                    <img src={star} className="w-[10px] lg:w-5 2xl:w-[26px] 4xl:w-[33px]" />
                  </div>
                ))}
            </div>
            <p className="text-black text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] 4xl:text-[36px] font-semibold leading-[162%] opacity-[74%]">
              $ 450
            </p>
          </div>
          <button className="2xl:mt-[10px] text-[#00BCD4] border border-[#00BCD4] w-full rounded-[80px] py-[3px] xl:py-2 2xl:py-[10px] 4xl:py-[15px] font-bold text-sm xl:text-base 2xl:text-xl 4xl:text-2xl">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
