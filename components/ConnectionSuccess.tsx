import Image from "next/image";
import { useContext } from "react";
import FormValuesContext from "../context/FormContext";
import TextUnderButton from "./TextUnderButton";
import successIcon from "../assets/successSmall.png";
import successBigIcon from "../assets/successBig.png";

interface ConnectionSuccessProps {
  image?: string;
  shopName?: string;
  title: string;
  text: string;
  buttonText: string;
}

const ConnectionSuccess = ({
  image,
  title,
  text,
  buttonText,
}: ConnectionSuccessProps) => {
  const { handleChangeStep, formState } = useContext(FormValuesContext);

  const handleButtonClick = () => {
    handleChangeStep(formState.step + 1);
  };

  return (
    <div className=" bg-white pt-[112px] md:pt-0 px-8 xl:py-[62px] h-min">
      <article className="flex flex-col justify-center items-center relative">
        <Image
          src={image ? image : successBigIcon}
          alt="shop image"
          width={82.5}
          height={80}
          className="rounded-full mb-8"
        />
        {image && (
          <Image
            src={successIcon}
            alt="success icon"
            className="absolute top-0 right-[38%]"
          />
        )}
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
          <TextUnderButton
            linkText={"Wrong store?"}
            spanText={"Connect another one"}
            route={""}
          />
        )}
      </div>
    </div>
  );
};

export default ConnectionSuccess;
