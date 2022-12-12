import { useContext } from "react";
import Image from "next/image";
import FormValuesContext from "../../context/FormContext";
import { checkNextButtonEnabled } from "../../helpers/checkNextButtonEnabled";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

const RegistrationProgress = () => {
  const { formState, handleChangeStep } = useContext(FormValuesContext);
  const { step } = formState;

  const progressLineFillness = () => {
    switch (step) {
      case 1:
        return "w-1/4";
      case 2:
        return "w-2/4";
      case 3:
        return "w-3/4";
      case 4:
        return "w-4/4";
      default:
        "w-0";
    }
  };

  const isNextEnabled = checkNextButtonEnabled(step, formState);
  const fillness = progressLineFillness();

  return (
    <>
      <div className="mb-8 xl:hidden">
        <p className="mb-2 text-xs leading-[18px] text-[#4F637D]">
          Step {step} of 4
        </p>
        <div className="mb-2 w-full bg-white rounded h-[10px] border-[1px] border-[#C9D3E0]">
          <div className={`bg-[#C9D3E0] h-[8px] rounded ${fillness}`}></div>
        </div>
        <div className="flex justify-between px-[8px]">
          <div className="flex items-center">
            <Image src={arrowLeft} alt="left arrow icon" className="mr-[2px]" />
            <button
              type="button"
              onClick={() => handleChangeStep(step - 1)}
              disabled={step === 1 ? true : false}
              className="disabled:text-[#C3CAD5] text-xs leading-[18px] text-[#4F637D]"
            >
              Prev
            </button>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleChangeStep(step + 1)}
              disabled={!isNextEnabled}
              className="disabled:text-[#C3CAD5] text-xs leading-[18px] text-[#4F637D] mr-[2px]"
            >
              Next
            </button>
            <Image src={arrowRight} alt="right arrow icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationProgress;
