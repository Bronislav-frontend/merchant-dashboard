import { useState } from "react";
import axios from "axios";
import RegistrationProgress from "../components/RegisterFormComponents/RegistrationProgress";
import ContactsForm from "../components/RegisterFormComponents/ContactsForm";
import ConnectToShopify from "../components/RegisterFormComponents/ConnectToShopify";
import ConnectToEmail from "../components/RegisterFormComponents/ConnectToEmail";
import Logo from "../components/Logo";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    shop_token: "",
    google_token: "",
  });

  console.log(registerInfo);
  const registerUser = async () => {
    const resp = await axios.post(
      `${process.env.API_URL}/register`,
      registerInfo
    );
    console.log(resp);
  };

  const multiStepForm = () => {
    switch (step) {
      case 1:
        return (
          <ContactsForm
            setStep={setStep}
            registerInfo={registerInfo}
            setRegisterInfo={setRegisterInfo}
          />
        );
      case 2:
        return (
          <ConnectToShopify
            setStep={setStep}
            registerInfo={registerInfo}
            setRegisterInfo={setRegisterInfo}
          />
        );
      case 3:
        return (
          <ConnectToEmail
            setStep={setStep}
            registerInfo={registerInfo}
            setRegisterInfo={setRegisterInfo}
          />
        );
      case 4:
        registerInfo.google_token !== "" && registerUser();
      default:
    }
  };

  return (
    <>
      <Logo />
      <RegistrationProgress
        step={step}
        setStep={setStep}
        registerInfo={registerInfo}
      />
      {multiStepForm()}
    </>
  );
};

export default Signup;
