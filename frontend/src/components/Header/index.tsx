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

  useEffect(() => {
    setviewTopHeader(true);
  }, []);

  const selectLink = (index: number) => {
    setLink(index);
  };

  return (
    <div className="w-full">
      {viewTopHeader && <TopHeader />}
      <div className="px-30 py-7.5 flex items-center gap-26 bg-primary relative">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
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
        <div className="absolute top-3 right-30">
          <img src={mark} alt="mark" />
        </div>
      </div>
    </div>
  );
};

export default Header;
