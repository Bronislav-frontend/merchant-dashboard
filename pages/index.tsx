import { useContext, useState } from "react";
import FormValuesContext from "../context/FormContext";
import useWindowSize from "../hooks/useWindowSize";
import LeftSidebar from "../components/DesktopComponents/LeftSidebar";
import RegistrationProgress from "../components/RegisterFormComponents/RegistrationProgress";
import ContactsForm from "../components/RegisterFormComponents/ContactsForm";
import ConnectToShopify from "../components/RegisterFormComponents/ConnectToShopify";
import ConnectToEmail from "../components/RegisterFormComponents/ConnectToEmail";
import Logo from "../components/Logo";
import ConnectionSuccess from "../components/ConnectionSuccess";
import SuccessLayout from "../components/SuccessLayout";
import Loader from "../components/Loader";

const Signup = () => {
  const { formState } = useContext(FormValuesContext);
  const [shopData, setShopData] = useState({
    shop_logo_url: "",
    shop_name: "",
    token: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const size = useWindowSize();

  const multiStepForm = () => {
    switch (formState.step) {
      case 1:
        return <ContactsForm />;
      case 2:
        return <ConnectToShopify setShopData={setShopData} />;
      case 3:
        return (
          <ConnectionSuccess
            image={shopData.shop_logo_url}
            title="Store Connected"
            text={`Chad is now able to manage customer support requests for ${shopData.shop_name}`}
            buttonText="Continue"
          />
        );
      case 4:
        return <ConnectToEmail setLoading={setIsLoading} />;
      default:
        return;
    }
  };

  return (
    <>
      {!isLoading && formState.step < 5 && (
        <div className="xl:flex">
          {size.width > 1279 && <LeftSidebar />}
          <div className="xl:flex xl:flex-1 xl:pt-[132px] xl:pb-[68px] ">
            <div className="px-[32px] pt-[16px] pb-[28px] md:bg-white md:px-[72px] md:pt-[80px] md:pb-[64px] md:rounded-lg md:shadow-card md:max-w-[540px] md:mx-auto xl:max-w-[480px] lg:px-10 lg:py-[64px] h-min">
              {formState.step !== 3 && formState.step !== 5 && (
                <div>
                  <Logo />
                  <RegistrationProgress />
                </div>
              )}
              {multiStepForm()}
            </div>
          </div>
        </div>
      )}
      {isLoading && size.width > 1279 && <Loader />}
      {formState.step === 5 && <SuccessLayout shopName={shopData.shop_name} />}
    </>
  );
};

export default Signup;
