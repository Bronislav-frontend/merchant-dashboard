import FakeSlider from "./FakeSlider";
import ProgressbarDesktop from "./ProgressbarDesktop";

interface LeftSideBarProp {
  isProgressbarHidden: boolean;
}

const LeftSidebar = ({ isProgressbarHidden }: LeftSideBarProp) => {
  return (
    <div className="min-h-screen h-full w-[568px] bg-gradient-to-t from-[#0D3251] to-[#19476C] pl-[102px] pb-[56px]">
      <div className="pt-[200px] mb-[172px]">
        <ProgressbarDesktop isHidden={isProgressbarHidden} />
      </div>
      <FakeSlider />
    </div>
  );
};

export default LeftSidebar;
