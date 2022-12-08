interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  return (
    <li>
      <h3 className="mb-[4px]">{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BenefitItem;
