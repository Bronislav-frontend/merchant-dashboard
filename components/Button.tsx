import ButtonSpinner from "./ButtonSpinner";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  handleClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text,
  type,
  handleClick,
  isDisabled,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mb-[16px] mt-[32px]"
    >
      {!isLoading && text}
      {isLoading && <ButtonSpinner />}
    </button>
  );
};

export default Button;
