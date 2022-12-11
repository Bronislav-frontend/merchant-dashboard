import FakeSlider from "./FakeSlider";
import ProgressbarDesktop from "./ProgressbarDesktop";

const LeftSidebar = () => {
  return (
    <div className="w-[568px] bg-gradient-to-t from-[#0D3251] to-[#19476C] pl-[102px] h-full pb-[56px]">
      <div className="pt-[200px] mb-[172px]">
        <ProgressbarDesktop />
      </div>
      <FakeSlider />
    </div>
  );
};

export default LeftSidebar;
