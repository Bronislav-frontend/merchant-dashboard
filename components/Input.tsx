interface InputProps {
  spanText: string;
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({
  spanText,
  type,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <label className="flex flex-col">
      <span className="mb-[8px] font-medium text-xs leading-[18px]">
        {spanText}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="px-[17px] py-[10.5px] bg-[#F8F9FC] rounded mb-[24px] placeholder:text-[#C3CAD5]"
      />
    </label>
  );
};

export default Input;
