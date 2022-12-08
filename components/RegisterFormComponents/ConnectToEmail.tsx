import Image from "next/image";
import axios from "axios";
import googleIcon from "../../assets/iconGoogle.png";
import TextArticle from "../TextArticle";
import BenefitItem from "./BenefitItem";
import TextUnderButton from "../TextUnderButton";
import { userCredentials } from "../../interfaces/interfaces";

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
  // This Should Be refactored

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
    const getGoogleToken = async () => {
      const response = await axios.get(`${process.env.API_URL}/google`);
      setRegisterInfo((prevState) => ({
        ...prevState,
        google_token: response.data.token,
      }));
    };
    getGoogleToken();
  };

  // This Should Be refactored

  return (
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
  );
};

export default ConnectToEmail;
