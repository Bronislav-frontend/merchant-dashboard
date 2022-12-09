import React from "react";

interface InputProps {
  spanText: string;
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent) => void;
  placeholder: string;
  error?: string;
  touched?: boolean;
}

const Input = ({
  spanText,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  touched,
  onBlur,
}: InputProps) => {
  return (
    <>
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
          onBlur={onBlur}
          className={`px-[17px] py-[10.5px] bg-[#F8F9FC] rounded mb-2 placeholder:text-[#C3CAD5]  ${
            error && touched && "border border-[#D24646]"
          }  focus:outline-none focus:border focus:border-[#32ABF2] focus:bg-white`}
        />
      </label>
      {touched && error && (
        <p className="text-[#D24646] text-xs mb-6">{error}</p>
      )}
    </>
  );
};

export default Input;
