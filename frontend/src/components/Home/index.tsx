import banner from "../../../public/img/banner.jpg";
import backMask from "../../../public/img/back.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col gap-10">
      <div className="w-full">
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <div className="m-auto p-10">
        <img src={backMask} alt="backMask" />
      </div>
    </div>
  );
};

export default Home;
