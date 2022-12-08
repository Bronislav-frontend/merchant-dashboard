import Link from "next/link";

interface TextProps {
  linkText: string;
  spanText?: string;
  route: string;
}

const TextUnderButton = ({ linkText, spanText, route }: TextProps) => {
  return (
    <>
      {spanText && (
        <div className="flex justify-center">
          <p className="mr-[3px]">{linkText}</p>
          <Link className="text-[#32ABF2]" href={route}>
            {spanText}
          </Link>
        </div>
      )}
      {!spanText && <Link href={route}>{linkText}</Link>}
    </>
  );
};

export default TextUnderButton;
