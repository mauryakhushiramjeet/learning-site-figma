import React, { useEffect, useState } from "react";
import logo from "../Assets/svgs/Group 235.svg";
import profileImage from "../Assets/svgs/profileimage.svg";
import down from "../Assets/svgs/dropDown.jpg";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import homeLogo from "../Assets/svgs/logoHome.svg";
const Navbar = ({ isHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const navigate = useNavigate();
  const menu = [
    { id: 1, text: "Home" },
    { id: 2, text: "Cources" },
    { id: 3, text: "Careers" },
    { id: 4, text: "Blog" },
    { id: 5, text: "About Us" },
  ];
  const handleNavigation = (text) => {
    if (text == "Home") {
      navigate("/");
    }
    if (text === "Cources") {
      navigate("/course");
    }
  };
  useEffect(() => {
    if (isHome == "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [isHome]);
  console.log(isHomePage);
  return (
    <header className="relative">
      <div
        className={`sm:hidden absolute bg-white w-full z-10 ${
          isHomePage
            ? " top-[55px] xxs:top-[68px]"
            : "top-[44px] xxs:top-[59px]"
        } border-t transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col gap-5 items-center transition-opacity duration-300 bg-[#49BBBD] py-10 text-white ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {menu.map((m, index) => (
            <p
              key={index}
              onClick={() => {
                handleNavigation(m.text);
                setMenuOpen((prev) => !prev);
              }}
              className="text-base font-medium w-fit  cursor-pointer"
            >
              {m.text}
            </p>
          ))}
        </div>
      </div>

      <nav
        className={`px-[11px]  lg:px-[70px]  xl:px-[120px] ${
          isHomePage
            ? "bg-[#26B2B4] pt-5 2xl:pt-[30px]"
            : "bg-white max-sm:py-1 max-4xl:py-2"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="">
            <img
              src={isHomePage ? homeLogo : logo}
              alt="logo"
              className="w-[50px] xxs:w-[70px] sm:w-[55px] lg:w-[77px] 3xl:w-full"
            />
          </div>
          <div
            className={`sm:flex gap-[25px] lg:gap-[50px] ${
              isHome ? "xl:gap-20" : "xl:gap-[69px]"
            } items-center hidden`}
          >
            {/* menu */}
            <div>
              <ul className="flex gap-[25px] lg:gap-[30px] xl:gap-[38px] 2xl:gap-20 items-center">
                {menu.map((m, index) => (
                  <li
                    onClick={() => handleNavigation(m.text)}
                    key={index}
                    className={`text-sm lg:text-base xl:text-lg 2xl:text-[22px]  ${
                      isHomePage
                        ? "text-[#FFFFFF] hover:text-[#D8587E]"
                        : "text-[#5B5B5B] hover:text-[#49BBBD]"
                    }  hover:font-bold cursor-pointer`}
                  >
                    {m.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* image */}
            {isHomePage ? (
              <div className="flex items-center gap-5 xl:gap-[26px]">
                <button
                  className="py-[5px] lg:py-2 2xl:py-[14px] px-4 md:px-[26px] 2xl:px-[50px] text-sm lg:text-base xl:text-xl 4xl:text-[22px]  bg-[#FFFFFF] rounded-[60px] 2xl:rounded-[80px] font-medium text-[#5B5B5B] shadow:[0px_20px_24px_0px_#00000008]
"
                >
                  Login
                </button>
                <button className="py-[5px] lg:py-2 2xl:py-[14px] px-3 md:px-5 2xl:px-10 text-sm lg:text-base xl:text-xl 4xl:text-[22px] font-medium rounded-[60px] 2xl:rounded-[80px] text-[#FFFFFF] bg-[#FFFFFF4D] bg-opacity-[30%] shadow:[0px_20px_24px_0px_#00000008] tracking-[0.02em]">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className={`flex gap-[13px] items-center`}>
                <div>
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-[44px] lg:w-[54px] 3xl:w-full"
                  />
                </div>
                <p className="font-medium text-black text-base lg:text-lg">
                  Lina
                </p>
                <div>
                  <img src={down} alt="drop-Down" />
                </div>
              </div>
            )}
          </div>

          <div className="sm:hidden flex items-center gap-2">
            {isHomePage ? (
              <div className="flex items-center gap-3 xl:gap-[26px]">
                <button
                  className="py-[3px] xxs:py-[6px] text-sm px-[10px] xxs:px-[15px] bg-[#FFFFFF] rounded-[60px] 2xl:rounded-[80px] font-medium text-[#5B5B5B] shadow:[0px_20px_24px_0px_#00000008]
"
                >
                  Login
                </button>
                <button className="text-sm py-[3px] xxs:py-[6px] px-[10px] xxs:px-[15px]  font-medium rounded-[60px] 2xl:rounded-[80px] text-[#FFFFFF] bg-[#FFFFFF4D] bg-opacity-[30%] shadow:[0px_20px_24px_0px_#00000008] tracking-[0.02em]">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-9 lg:w-[54px] 3xl:w-full object-cover"
                  />
                </div>
                <p className="font-medium text-black text-xs lg:text-lg">
                  Lina
                </p>
                <div>
                  <img src={down} alt="drop-Down" />
                </div>
              </div>
            )}
            <div
              className={` ${
                isHomePage ? "text-white" : "text-black"
              } block sm:hidden`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <RxCross2 className="h-[28px] w-[28px" />
              ) : (
                <MdMenu className="h-[28px] w-[28px]" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
