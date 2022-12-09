import { userCredentials } from "../../interfaces/interfaces";
// import useWindowSize from "../../hooks/useWindowSize";

interface RegistrationProgressProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  registerInfo: userCredentials;
}

const RegistrationProgress = ({
  step,
  setStep,
  registerInfo,
}: RegistrationProgressProps) => {
  // const window = useWindowSize();

  const progressLineFillness = () => {
    switch (step) {
      case 1:
        return "w-[25%]";
      case 2:
        return "w-[50%]";
      case 3:
        return "w-[75%]";
      default:
        "w-[0%]";
    }
  };

  return (
    <>
      <div className="mb-8">
        <p className="mb-2 text-xs leading-[18px] text-[#4F637D]">
          Step {step} of 4
        </p>
        <div className="mb-2 w-full bg-white rounded h-[10px] border-[1px] border-[#C9D3E0]">
          <div
            className={`bg-[#C9D3E0] h-[8px] rounded ${progressLineFillness()}`}
          ></div>
        </div>
        <div className="flex justify-between px-[3px]">
          <button
            type="button"
            onClick={() => setStep((prevStep) => prevStep - 1)}
            disabled={step === 1 ? true : false}
            className="disabled:text-[#C3CAD5] text-xs leading-[18px] text-[#4F637D]"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={true}
            className="disabled:text-[#C3CAD5] text-xs leading-[18px] text-[#4F637D]"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationProgress;
