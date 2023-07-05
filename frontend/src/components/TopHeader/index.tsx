import { useState } from "react";
import { leftTopHeader } from "../../utils/header";

const TopHeader = () => {
  const [selectLeftID, setSelectLeftID] = useState<number>(0);
  return (
    <div className="w-full py-3 px-30 bg-secondary flex items-center justify-between">
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
            <h1 className="uppercase font-medium text-[15px] leading-[14px] tracking-tighter">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
