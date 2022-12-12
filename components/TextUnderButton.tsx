import Link from "next/link";

interface TextProps {
  linkText: string;
  spanText: string;
  route: string;
}

// NEED TO REFACTOR THIS

const TextUnderButton = ({ linkText, spanText, route }: TextProps) => {
  return (
    <div className="flex justify-center">
      <p className="mr-[3px] text-sm leading-[18px]">{linkText}</p>
      <Link className="text-[#32ABF2] text-sm leading-[18px]" href={route}>
        {spanText}
      </Link>
    </div>
  );
};

export default TextUnderButton;

// NEED TO REFACTOR THIS
