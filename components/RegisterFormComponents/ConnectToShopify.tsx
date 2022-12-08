import { useState } from "react";
import axios from "axios";
import { userCredentials } from "../../interfaces/interfaces";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";
import StoreConnectionSuccess from "../StoreConnectionSuccess";

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
  registerInfo: userCredentials;
  setRegisterInfo: React.Dispatch<React.SetStateAction<userCredentials>>;
}

const ConnectToShopify = ({
  setStep,
  registerInfo,
  setRegisterInfo,
}: ConnectToShopifyProps) => {
  // const [onSuccess, setOnSuccess] = useState(false);

  // THIS SHOULD BE IMPROVED

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
    const getShopifyToken = async () => {
      const response = await axios.get(`${process.env.API_URL}/shopify`, {
        params: { name: registerInfo.name },
      });
      setRegisterInfo((prevState) => ({
        ...prevState,
        shop_token: response.data.token,
      }));
    };
    getShopifyToken();
  };

  // THIS SHOULD BE IMPROVED

  return (
    <>
      <div className="flex flex-col">
        <TextArticle
          title={"Connect to Shopify Store"}
          paragraph={
            "Installs the Chad widget in your Shopify store and sets it up to display your customers order information and self-serve options."
          }
        />
        <ul className="p-[16px] bg-[#F8F9FC] rounded-lg grid gap-4">
          {textArray.map((text, index) => (
            <BenefitItem
              key={index}
              title={text.title}
              description={text.description}
            />
          ))}
        </ul>
        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mt-[32px] mb-[16px]"
        >
          Connect store
        </button>
        <TextUnderButton linkText={"I don`t use Shopify"} route={""} />
      </div>
    </>
  );
};

export default ConnectToShopify;
