import { useContext } from "react";
import Image from "next/image";
import FormValuesContext from "../../context/FormContext";
import { checkNextButtonEnabled } from "../../helpers/checkNextButtonEnabled";
import StepSuccessIcon from "./StepSuccessIcon";
import prevArrow from "../../assets/prevArrow.png";
import nextArrow from "../../assets/nextIcon.png";

interface ProgressbarDesktopProp {
  isHidden: boolean;
}

const ProgressbarDesktop = ({ isHidden }: ProgressbarDesktopProp) => {
  const { formState, handleChangeStep } = useContext(FormValuesContext);
  const { step } = formState;
  const isNextEnabled = checkNextButtonEnabled(step, formState);

  return (
    <div className="flex flex-col">
      <div className="flex h-[272px] mb-12">
        <ul className="flex flex-col mr-4">
          <li className="flex flex-col items-center justify-center">
            <div
              className={`w-8 h-8 border-2 rounded-full 
                flex justify-center items-center " ${
                  step > 1 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
                }`}
            >
              {step > 1 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 1 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center justify-center">
            <div
              className={`w-8 h-8 border-2 border-[#32ABF2] rounded-full  flex items-center justify-center  ${
                step > 2 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
              }`}
            >
              {step > 2 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 2 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={`w-8 h-8 border-[#32ABF2] border-2 rounded-full  flex items-center justify-center  ${
                step > 3 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
              }`}
            >
              {step > 3 && <StepSuccessIcon />}
            </div>
            <span
              className={`h-12 w-[2px] ${
                step > 3 ? "bg-[#32ABF2]" : "bg-[#5D7FA3]"
              }`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={`w-8 h-8 border-2 border-[#5D7FA3] rounded-full  flex items-center justify-center`}
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
      {!isHidden && (
        <div className="flex justify-between w-[364px]">
          <button
            onClick={() => handleChangeStep(step - 1)}
            disabled={step === 1 ? true : false}
            className="px-3 py-[6px] bg-[#134267] rounded flex items-center text-[#93A8C1] disabled:text-[#5D7FA3] disabled:bg-transparent"
          >
            <Image src={prevArrow} alt="arrow back" className="mr-2" />
            Back
          </button>
          <button
            onClick={() => handleChangeStep(step + 1)}
            disabled={!isNextEnabled}
            className="px-3 py-[6px] bg-[#134267] rounded flex items-center text-[#93A8C1] disabled:text-[#5D7FA3] disabled:bg-transparent"
          >
            Next
            <Image src={nextArrow} alt="arrow next" className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProgressbarDesktop;

// step > 2 ? "border-[#32ABF2]" : "border-[#5D7FA3]"
// step === 3 ? "w-[42px] h-[42px]" : "w-8 h-8"
