import logoIcon from "../assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center mb-[16px]">
      <Image src={logoIcon} alt="blue octopus icon" className="mr-[2px]" />
      <p className="font-primary font-bold text-[24px] leading-[32px] text-[#20496C] ">
        Chad
      </p>
    </div>
  );
};

export default Logo;
