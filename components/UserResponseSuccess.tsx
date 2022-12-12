import Image from "next/image";
import { useContext } from "react";
import FormValuesContext from "../context/FormContext";
import successIcon from "../assets/successIll.png";

interface UserResponseSuccessProps {
  title: string;
  text: string;
}

const UserResponseSuccess = ({ title, text }: UserResponseSuccessProps) => {
  const { handleChangeStep } = useContext(FormValuesContext);
  const handleButtonClick = () => {
    handleChangeStep(1);
  };

  return (
    <div className=" bg-white pt-[112px] md:pt-0 px-8 xl:py-[62px] h-min">
      <article className="flex flex-col justify-center items-center relative">
        <Image
          src={successIcon}
          alt="shop image"
          className="rounded-full mb-8 w-20 h-20"
        />
        <h3 className="text-[#134267] font-medium leading-[19px] mb-2">
          {title}
        </h3>
        <p className="text-center mb-4 text-sm leading-[21px]">{text}</p>
      </article>
      <div className="flex flex-col">
        <button
          type="button"
          onClick={handleButtonClick}
          className=" bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mb-[16px]"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default UserResponseSuccess;
