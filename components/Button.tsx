interface ButtonProps {
  text: string;
  type: "button" | "submit";
  handleClick?: () => void;
  isDisabled?: boolean;
}

const Button = ({ text, type, handleClick, isDisabled }: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mb-[16px] mt-[32px]"
    >
      {text}
    </button>
  );
};

export default Button;
