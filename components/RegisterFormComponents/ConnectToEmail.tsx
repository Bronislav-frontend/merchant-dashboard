import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import googleIcon from "../../assets/iconGoogle.png";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";
import { userCredentials } from "../../interfaces/interfaces";
import ConnectionSuccess from "../ConnectionSuccess";

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
  registerInfo: userCredentials;
  setRegisterInfo: React.Dispatch<React.SetStateAction<userCredentials>>;
}

const ConnectToEmail = ({
  setStep,
  setRegisterInfo,
  registerInfo,
}: ConnectToEmailProps) => {
  const [data, setData] = useState();
  const [onSuccess, setOnSuccess] = useState(false);
  // This Should Be refactored

  const handleButtonClick = () => {
    const getGoogleToken = async () => {
      const response = await axios.get(`${process.env.API_URL}/google`);
      if (response.data.status === "success") setOnSuccess(true);
      setData(response.data);
      setRegisterInfo((prevState) => ({
        ...prevState,
        google_token: response.data.token,
      }));
    };
    getGoogleToken();
  };

  // This Should Be refactored

  return (
    <>
      {!onSuccess && (
        <div className="flex flex-col">
          <TextArticle
            title={"Connect to customer support email"}
            paragraph={
              "Allows Chad to send automated responses on your behalf from your usual support mailbox"
            }
          />
          <ul className="p-[16px] bg-[#F8F9FC] rounded-lg">
            {textArray.map((text, index) => (
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
          <TextUnderButton linkText={"I don`t use Gmail"} route={""} />
        </div>
      )}
      {onSuccess && (
        <ConnectionSuccess
          setStep={setStep}
          title="You`re ready to go!"
          text="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
          buttonText="Ok"
        />
      )}
    </>
  );
};

export default ConnectToEmail;
