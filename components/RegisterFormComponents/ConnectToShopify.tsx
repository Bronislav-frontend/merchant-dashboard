import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FormValuesContext from "../../context/FormContext";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";
import Button from "../Button";

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

interface ShopData {
  shop_logo_url: string;
  shop_name: string;
  token: string;
  status: string;
}

interface ConnectToShopifyProps {
  setShopData: React.Dispatch<React.SetStateAction<ShopData>>;
}

const ConnectToShopify = ({ setShopData }: ConnectToShopifyProps) => {
  const { formState, handleAddShopToken, handleChangeStep } =
    useContext(FormValuesContext);
  const [isLoading, setIsLoading] = useState(false);

  const getShopifyToken = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/shopify`, {
        params: { name: formState.name },
      });
      setIsLoading(false);
      if (response.data.status === "success")
        handleAddShopToken(response.data.token);
      setShopData(response.data);
      handleChangeStep(formState.step + 1);
    } catch (error) {
      toast.error("Something went wrong");
      alert(error);
    }
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    getShopifyToken();
  };

  return (
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
      <Button
        type="button"
        text="Connect store"
        handleClick={handleButtonClick}
        isLoading={isLoading}
      />
      <TextUnderButton linkText={"I don`t use Shopify"} route={""} />
    </div>
  );
};

export default ConnectToShopify;
