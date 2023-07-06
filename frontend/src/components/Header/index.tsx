import { useEffect, useState } from "react";
import TopHeader from "../TopHeader";
import { headerLink } from "../../utils/header";
import logo from "../../../public/img/logo.png";
import mark from "../../../public/img/mark.png";

const Header = ({
  link,
  setLink,
}: {
  link: number;
  setLink: (c: number) => void;
}) => {
  const [viewTopHeader, setviewTopHeader] = useState<boolean>(false);
  const [viewLink, setViewLink] = useState<boolean>(false);

  useEffect(() => {
    setviewTopHeader(true);
  }, []);

  const selectLink = (index: number) => {
    setLink(index);
  };

  const mobileClass =
    "cursor-pointer absolute w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-1000 bg-[#0f1941] hover:bg-[#f16100] " +
    `${viewLink ? "opacity-100" : "opacity-0"}`;

  return (
    <div className="w-full">
      {viewTopHeader && <TopHeader />}
      <div className="bg-primary relative sm:flex items-center max-lg:justify-between lg:gap-26 gap-2 py-7.5 xl:px-30 md:px-20 sm:px-10 hidden">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center lg:gap-8 gap-3">
          {headerLink.map((item, index) => (
            <div
              className={`cursor-pointer relative after:content-[' '] after:h-[2px] after:absolute after:bg-white ${
                index === link
                  ? "after:w-full"
                  : "after:w-0 after:transition-all after:duration-500 after:transition-timing-function-header hover:after:w-full"
              }`}
              onClick={() => selectLink(index)}
              key={item.type}
            >
              <h1 className="uppercase font-medium text-[15px] leading-[14px] tracking-tighter text-white">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="absolute top-3 xl:right-30 lg:right-20 lg:block hidden">
          <img src={mark} alt="mark" />
        </div>
      </div>
      <div className="sm:hidden block fixed bottom-8 left-8">
        <input
          id="mobileMode"
          type="checkbox"
          className="hidden"
          onClick={() => setViewLink((rev) => !rev)}
        />
        <label
          htmlFor="mobileMode"
          className="cursor-pointer absolute -bottom-2 -left-2 w-10 h-10 bg-secondary rounded-full shadow-[0_5px_20px_#a79a79] transition-all duration-300 z-10 rounded-bl-sm border border-[#72623a] hover:bg-[#ccaf52] hover:shadow-[0_5px_30px_#a79a79] before:content-[' '] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-full before:bg-[#0000000f] after:absolute after:w-full after:h-full after:bg-mobile"
        />
        <div
          className={`absolute bottom-0 left-0 w-30 h-30 transition-all duration-300 ${
            viewLink ? "scale-100" : "scale-0"
          }`}
        >
          <div
            className={`${mobileClass} -left-4 -top-4 ${
              link === 0 && "bg-[#f16100]"
            }`}
            onClick={() => {
              setLink(0);
              setViewLink(false);
            }}
          >
            <h1>F</h1>
          </div>
          <div
            className={`${mobileClass} left-8 -top-1 ${
              link === 1 && "bg-[#f16100]"
            }`}
            onClick={() => {
              setLink(1);
              setViewLink(false);
            }}
          >
            <h1>S</h1>
          </div>
          <div
            className={`${mobileClass} left-17 top-5 ${
              link === 2 && "bg-[#f16100]"
            }`}
            onClick={() => {
              setLink(2);
              setViewLink(false);
            }}
          >
            <h1>J</h1>
          </div>
          <div
            className={`${mobileClass} left-23 top-14 ${
              link === 3 && "bg-[#f16100]"
            }`}
            onClick={() => {
              setLink(3);
              setViewLink(false);
            }}
          >
            <h1>B</h1>
          </div>
          <div
            className={`${mobileClass} -right-4 -bottom-4 ${
              link === 4 && "bg-[#f16100]"
            }`}
            onClick={() => {
              setLink(4);
              setViewLink(false);
            }}
          >
            <h1>C</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
