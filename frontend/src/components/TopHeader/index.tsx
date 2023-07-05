import { leftTopHeader } from "../../utils/header";

const TopHeader = () => {
  return (
    <div className="w-full py-3 px-30 bg-secondary flex items-center justify-between">
      <div className="flex items-center gap-6">
        {leftTopHeader.map((item) => (
          <div className="cursor-pointer" key={item.type}>
            <h1 className="uppercase">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
