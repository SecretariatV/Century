import { useState } from "react";
import { leftTopHeader, rightTopHeader } from "../../utils/header";

const TopHeader = () => {
  const [selectLeftID, setSelectLeftID] = useState<number>();
  const [selectRightID, setSelectRightID] = useState<number>();

  return (
    <div className="w-full bg-secondary flex items-center justify-between sm:py-3 py-1 xl:px-30 md:px-20 sm:px-10 xs:px-5 px-2">
      <div className="flex items-center gap-6">
        {leftTopHeader.map((item, index) => (
          <div
            className={`cursor-pointer relative after:content-[' '] after:h-[2px] after:absolute after:bg-black ${
              index === selectLeftID
                ? "after:w-full"
                : "after:w-0 after:transition-all after:duration-500 after:transition-timing-function-header hover:after:w-full"
            }`}
            onClick={() => setSelectLeftID(index)}
            key={item.type}
          >
            <h1 className="uppercase font-medium sm:text-base text-xs leading-[14px] tracking-tighter">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6">
        {rightTopHeader.map((item, index) => (
          <div
            className={`cursor-pointer relative after:content-[' '] after:h-[2px] after:absolute after:bg-black ${
              index === selectRightID
                ? "after:w-full"
                : "after:w-0 after:transition-all after:duration-500 after:transition-timing-function-header hover:after:w-full"
            }`}
            onClick={() => setSelectRightID(index)}
            key={item.type}
          >
            <h1 className="uppercase font-medium sm:text-base text-xs leading-[14px] tracking-tighter">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
