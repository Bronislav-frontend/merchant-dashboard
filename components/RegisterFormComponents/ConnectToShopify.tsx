import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Logo from "../Logo";
import RegistrationProgress from "./RegistrationProgress";
import FormValuesContext from "../../context/FormContext";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import ConnectionSuccess from "../ConnectionSuccess";
import UserDoNotUse from "../UserDoNotUse";
import Button from "../Button";
import { TEXT_ARRAY_SHOPIFY } from "../../helpers/variables";
import { SHOP_PLATFORMS } from "../../helpers/variables";

interface ConnectToShopifyProps {
  setShopName: React.Dispatch<React.SetStateAction<string>>;
}

const ConnectToShopify = ({ setShopName }: ConnectToShopifyProps) => {
  const { formState, handleAddShopToken } = useContext(FormValuesContext);
  const [shopData, setShopData] = useState({
    shop_logo_url: "",
    shop_name: "",
    token: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isConnectionSuccess, setIsConnectionSuccess] = useState(false);
  const [isUsingShopify, setIsUsingShopify] = useState(true);

  const getShopifyToken = async () => {
    try {
      const { data } = await axios.get(`${process.env.API_URL}/shopify`, {
        params: { name: formState.name },
      });
      setIsLoading(false);
      if (data.status === "success") {
        handleAddShopToken(data.token);
        setShopData(data);
        setShopName(data.shop_name);
        setIsConnectionSuccess(true);
      } else if (data.status === "failure") {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        "Chad couldn’t connect to your Shopify account. Please try again."
      );
      alert(error);
    }
  };

  const handleButtonSubmit = () => {
    setIsLoading(true);
    getShopifyToken();
  };

  return (
    <>
      {isUsingShopify && !isConnectionSuccess && (
        <div>
          <Logo />
          <RegistrationProgress />
          <TextArticle
            title={"Welcome to Chad"}
            paragraph={
              "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
            }
          />
          <div className="flex flex-col">
            <TextArticle
              title={"Connect to Shopify Store"}
              paragraph={
                "Installs the Chad widget in your Shopify store and sets it up to display your customers order information and self-serve options."
              }
            />
            <ul className="p-[16px] bg-[#F8F9FC] rounded-lg grid gap-4">
              {TEXT_ARRAY_SHOPIFY.map((text, index) => (
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
              handleClick={handleButtonSubmit}
              isLoading={isLoading}
            />
            <button
              type="button"
              onClick={() => setIsUsingShopify(false)}
              className="text-sm leading-[18px] text-[#757C8A]"
            >
              I don`t use Shopify
            </button>
          </div>
        </div>
      )}
      {isUsingShopify && isConnectionSuccess && (
        <ConnectionSuccess
          image={shopData.shop_logo_url}
          title="Store Connected"
          text={`Chad is now able to manage customer support requests for ${shopData.shop_name}`}
          buttonText="Continue"
          onIsSuccessChange={setIsConnectionSuccess}
        />
      )}
      {!isUsingShopify && (
        <div>
          <UserDoNotUse
            title="Don`t use Shopify?"
            text="Unfortunately, Chad Beta is currently only available on Shopify. Let us know what platform you use and we’ll let you know when Chad becomes available there."
            platformsArray={SHOP_PLATFORMS}
            pText="Actually use Shopify?"
            isUsing={setIsUsingShopify}
          />
        </div>
      )}
    </>
  );
};

export default ConnectToShopify;
