import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";

const textArray = [
  {
    title: "Track orders and shipping",
    description: "Global coverage with 600+ couriers supported",
  },
  {
    title: "Manage orders",
    description:
      "Allow customers to track, return, exchange, or report problems with their orders",
  },
  {
    title: "Process returns and exchanges",
    description:
      "Automatically checks your store policy and existing inventory before resolving or escalating each request",
  },
];

interface ConnectToEmailProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConnectToEmail = ({ setStep }: ConnectToEmailProps) => {
  return (
    <div>
      <TextArticle
        title={"Connect to customer support email"}
        paragraph={
          "Allows Chad to send automated responses on your behalf from your usual support mailbox"
        }
      />
      <ul className="p-[16px] bg-[#F8F9FC] rounded-lg mb-[32px]">
        {textArray.map((text, index) => (
          <BenefitItem
            key={index}
            title={text.title}
            description={text.description}
          />
        ))}
      </ul>
      <TextUnderButton
        linkText={"Already have an account?"}
        spanText={"Login"}
        route={"login"}
      />
    </div>
  );
};

export default ConnectToEmail;
