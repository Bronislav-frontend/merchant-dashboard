import { useContext } from "react";
import Image from "next/image";
import FormValuesContext from "../../context/FormContext";
import StepSuccessIcon from "./StepSuccessIcon";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

const ProgressbarDesktop = () => {
  const { formState, handleChangeStep } = useContext(FormValuesContext);
  const { step } = formState;
  console.log(step);
  return (
    <div className="flex flex-col">
      <div className="flex h-[272px] mb-12">
        <ul className="flex flex-col mr-4">
          <li className="flex flex-col items-center justify-center">
            <div
              className={` border-2 rounded-full 
                 border-[#32ABF2] flex justify-center items-center "
                 ${step === 2 ? "w-[42px] h-[42px]" : "w-8 h-8"}
  `}
            >
              {step > 1 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 1 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={` border-2 rounded-full  flex items-center justify-center ${
                step > 1 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
              } ${step === 3 ? "w-[42px] h-[42px]" : "w-8 h-8"}`}
            >
              {step > 2 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 3 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={` w-8 h-8 border-2 rounded-full  flex items-center justify-center ${
                step > 3 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
              }`}
            >
              {step > 4 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 4 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={`w-8 h-8 border-2 rounded-full  flex items-center justify-center  ${
                step > 5 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
              }`}
            ></div>
          </li>
        </ul>
        <ul className="flex flex-col justify-between">
          <li className="h-8 flex items-center text-[#5D7FA3]">Welcome</li>
          <li className="h-8 flex items-center text-[#5D7FA3]">
            Connect your Shopify store
          </li>
          <li className="h-8 flex items-center text-[#5D7FA3]">
            Connect your customer support email
          </li>
          <li className="h-8 flex items-center text-[#5D7FA3]">Done</li>
        </ul>
      </div>
      <div className="flex justify-between w-[364px]">
        <button className="px-3 py-[6px] bg-[#134267] rounded flex items-center">
          <Image src={arrowLeft} alt="arrow back" className="mr-2" />
          <p>Back</p>
        </button>
        <button className="px-3 py-[6px] bg-[#134267] rounded flex items-center">
          <p>Next</p>
          <Image src={arrowRight} alt="arrow next" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProgressbarDesktop;
