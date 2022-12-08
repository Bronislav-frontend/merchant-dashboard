import Image from "next/image";
import iconCheck from "../../assets/iconCheck.png";

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  return (
    <li>
      <div className="flex items-center mb-[4px]">
        <Image src={iconCheck} alt="check icon" className="mr-4" />
        <h3 className="font-medium text-[#134267] text-sm leading-[21px]">
          {title}
        </h3>
      </div>
      <p className="pl-8 text-[#4F637D] text-xs leading-[18px]">
        {description}
      </p>
    </li>
  );
};

export default BenefitItem;
