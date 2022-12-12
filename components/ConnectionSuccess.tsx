import Image from "next/image";
import { useContext } from "react";
import FormValuesContext from "../context/FormContext";
import successIcon from "../assets/successSmall.png";
import successIconBig from "../assets/successIll.png";

interface ConnectionSuccessProps {
  image?: string;
  shopName?: string;
  title: string;
  text: string;
  buttonText: string;
  onIsSuccessChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectionSuccess = ({
  image,
  title,
  text,
  buttonText,
  onIsSuccessChange,
}: ConnectionSuccessProps) => {
  const { handleChangeStep, formState } = useContext(FormValuesContext);

  const handleButtonClick = () => {
    onIsSuccessChange(false);
    handleChangeStep(formState.step + 1);
  };

  return (
    <div className=" bg-white pt-[112px] md:pt-0 px-8 xl:py-[62px] h-min">
      <article className="flex flex-col justify-center items-center ">
        <div className="relative">
          <Image
            src={image ? image : successIconBig}
            alt="shop image"
            width={82.5}
            height={80}
            className={`rounded-full mb-8 w-[160px] h-[160px] ${
              image && "w-[82.5px] h-[80px]"
            }`}
          />
          {image && (
            <Image
              src={successIcon}
              alt="success icon"
              className="absolute top-0 left-[60px]"
            />
          )}
        </div>

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
          {buttonText}
        </button>
        {image && (
          <div className="flex justify-center">
            <p className="mr-[3px] text-sm leading-[18px]">Wrong store?</p>
            <span
              onClick={() => onIsSuccessChange((prev) => !prev)}
              className="text-[#32ABF2] text-sm leading-[18px] cursor-pointer"
            >
              Connect another one
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionSuccess;
