import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";
import React from "react";

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

interface ConnectToShopifyProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConnectToShopify = ({ setStep }: ConnectToShopifyProps) => {
  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <TextArticle
        title={"Connect to Shopify Store"}
        paragraph={
          "Installs the Chad widget in your Shopify store and sets it up to display your customers order information and self-serve options."
        }
      />
      <ul className="p-[16px] bg-[#F8F9FC] rounded-lg mb-[32px] grid gap-4">
        {textArray.map((text, index) => (
          <BenefitItem
            key={index}
            title={text.title}
            description={text.description}
          />
        ))}
      </ul>
      <button type="button" onClick={handleButtonClick}>
        Click
      </button>
      <TextUnderButton
        linkText={"Already have an account?"}
        spanText={"Login"}
        route={"login"}
      />
    </div>
  );
};

export default ConnectToShopify;
