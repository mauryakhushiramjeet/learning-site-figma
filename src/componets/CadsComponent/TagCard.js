import React from "react";

const TagCard = ({ tag, index }) => {
  const tags = [
    { label: "Ut Sed Eros", bg: "bg-[#F25022]" },
    { label: "Curabitur Egestas", bg: "bg-[#F78CA2]" },
    { label: "Quisque Conseq.", bg: "bg-[#B05B22]" },
    { label: "Cras Convallis", bg: "bg-[#FDBB2D]" },
    { label: "Vestibulum fauci...", bg: "bg-[#C87CF9]" },
    { label: "Ut Sed Eros", bg: "bg-[#00ADEF]" },
    { label: "Vestibulum faucibu", bg: "bg-[#71C7B1]" },
  ];
  return (
    <div
      className="h-[179px] md:h-[200px] lg:h-[250px] 2xl:h-[340px] 4xl:h-[418px] w-[50px] md:w-[55px] lg:w-20 2xl:w-[90px] 4xl:w-[104px] px-[5px] md:px-1 lg:px-[12px] 2xl:px-4 py-[16px] md:py-5 2xl:py-6 bg-white rounded-[15px] lg:rounded-[28px] mt-[41px] rotate-[-16deg] cursor-pointer"
      key={index}
    >
      <div className="bg-[#CCFABC] rounded-[15px] lg:rounded-[20px] px-[7px] md:px-[9px] lg:px-[11px] xl:px-[9px] 4xl:px-2 py-[10px] lg:py-[15px] xl:py-5 h-full w-full ">
        <p
          className={` ${tag.bg} h-full w-full rounded-[10px] lg:rounded-[15px] relative flex items-center justify-center`}
        >
          <span className="text-sm xl:text-base 2xl:text-xl 4xl:text-2xl absolute text-white text-center text-nowrap rotate-[88deg] font-roboto">
            {tag.label}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TagCard;
