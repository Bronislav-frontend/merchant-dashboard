import ConnectionSuccess from "./ConnectionSuccess";
import SignupSuccessDesktop from "./DesktopComponents/SignupSuccessDesktop";
import useWindowSize from "../hooks/useWindowSize";

interface SuccessLayoutProps {
  shopName: string;
}

const SuccessLayout = ({ shopName }: SuccessLayoutProps) => {
  const size = useWindowSize();
  return (
    <>
      {size.width < 1280 && (
        <ConnectionSuccess
          title="You`re ready to go!"
          text="Chad doesn`t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
          buttonText="Ok"
        />
      )}
      {size.width >= 1280 && <SignupSuccessDesktop shopName={shopName} />}
    </>
  );
};

export default SuccessLayout;
