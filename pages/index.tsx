import { useContext, useState } from "react";
import FormValuesContext from "../context/FormContext";
import useWindowSize from "../hooks/useWindowSize";
import LeftSidebar from "../components/DesktopComponents/LeftSidebar";
import ContactsForm from "../components/RegisterFormComponents/ContactsForm";
import ConnectToShopify from "../components/RegisterFormComponents/ConnectToShopify";
import ConnectToEmail from "../components/RegisterFormComponents/ConnectToEmail";
import SuccessLayout from "../components/SuccessLayout";
import Loader from "../components/Loader";

const Signup = () => {
  const { formState } = useContext(FormValuesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isProgressbarHidden, setIsProgressbarHidden] = useState(true);
  const [shopName, setShopName] = useState("");
  const size = useWindowSize();

  const multiStepForm = () => {
    switch (formState.step) {
      case 1:
        return (
          <ContactsForm
            isProgressbarHidden={isProgressbarHidden}
            setIsProgressbarHidden={setIsProgressbarHidden}
          />
        );
      case 2:
        return <ConnectToShopify setShopName={setShopName} />;
      case 3:
        return <ConnectToEmail setLoading={setIsLoading} />;
      default:
        return;
    }
  };

  return (
    <>
      {!isLoading && formState.step < 4 && (
        <div className="xl:flex">
          {size.width > 1279 && (
            <LeftSidebar isProgressbarHidden={isProgressbarHidden} />
          )}
          <div className="xl:flex xl:flex-1 xl:pt-[132px] xl:pb-[68px] ">
            <div className="px-[32px] pt-[16px] pb-[28px] md:bg-white md:px-[72px] md:pt-[80px] md:pb-[64px] md:rounded-lg md:shadow-card md:max-w-[540px] md:mx-auto xl:max-w-[480px] lg:px-10 lg:py-[64px] h-min">
              {multiStepForm()}
            </div>
          </div>
        </div>
      )}
      {isLoading && size.width > 1279 && <Loader />}
      {formState.step === 4 && <SuccessLayout shopName={shopName} />}
    </>
  );
};

export default Signup;
