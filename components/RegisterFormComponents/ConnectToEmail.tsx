import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../Logo";
import RegistrationProgress from "./RegistrationProgress";
import FormValuesContext from "../../context/FormContext";
import googleIcon from "../../assets/iconGoogle.png";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import UserDoNotUse from "../UserDoNotUse";
import { TEXT_ARRAY_EMAIL } from "../../helpers/variables";
import { EMAIL_PLATFORMS } from "../../helpers/variables";

interface ConnectToGoogleProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectToEmail = ({ setLoading }: ConnectToGoogleProps) => {
  const { formState, handleChangeStep, handleAddGoogleToken } =
    useContext(FormValuesContext);
  const [isUsingGoogle, setIsUsingGoogle] = useState(true);

  useEffect(() => {
    formState.google_token !== "" && registerUser();
  }, [formState.google_token]);

  const getGoogleToken = async () => {
    try {
      const { data } = await axios.get(`${process.env.API_URL}/google`);
      if (data.status === "success") {
        handleAddGoogleToken(data.token);
      } else if (data.status === "failure") {
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      alert(error);
    }
  };

  const registerUser = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/register`,
        formState
      );
      if (data.status === "success") {
        console.log(data);
        handleChangeStep(4);
      } else if (data.status === "failure") {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        "Chad couldn’t connect to your Gmail account. Please try again."
      );
      alert(error);
    }
  };

  const handleButtonClick = () => {
    setLoading(true);
    getGoogleToken();
  };

  return (
    <>
      {isUsingGoogle && (
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
              title={"Connect to customer support email"}
              paragraph={
                "Allows Chad to send automated responses on your behalf from your usual support mailbox"
              }
            />
            <ul className="p-[16px] bg-[#F8F9FC] rounded-lg">
              {TEXT_ARRAY_EMAIL.map((text, index) => (
                <BenefitItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </ul>
            <div className="flex mt-[32px] mb-[16px] border rounded-sm border-[#5383EC]">
              <div className="flex items-center justify-center p-[15px] ">
                <Image src={googleIcon} alt="google icon" className="" />
              </div>
              <button
                type="button"
                className="flex-1 bg-[#5383EC] py-[13.5px] text-center text-white"
                onClick={handleButtonClick}
              >
                Connect Gmail account
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsUsingGoogle(false)}
              className="text-sm leading-[18px] text-[#757C8A]"
            >
              I don`t use Gmail
            </button>
          </div>
        </div>
      )}
      {!isUsingGoogle && (
        <UserDoNotUse
          title="Don’t use Gmail?"
          text="Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration."
          platformsArray={EMAIL_PLATFORMS}
          pText="Actually use Gmail? "
          isUsing={setIsUsingGoogle}
        />
      )}
    </>
  );
};

export default ConnectToEmail;
