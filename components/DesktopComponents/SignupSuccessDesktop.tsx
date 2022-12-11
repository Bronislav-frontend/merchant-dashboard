import Image from "next/image";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import FormValuesContext from "../../context/FormContext";
import Button from "../Button";
import closeIcon from "../../assets/closeIcon.png";

interface SignupSuccessDesktopProps {
  shopName: string;
}

const SignupSuccessDesktop = ({ shopName }: SignupSuccessDesktopProps) => {
  const { handleCleanState } = useContext(FormValuesContext);

  useEffect(() => {
    toast.success(`Shopify account connected ${shopName}`);
    toast.success("Customer support email connected !Something!");
  });

  return (
    <div className=" w-full h-full pt-[190px] bg-[#030E16] pb-[243px]">
      <div className="relative flex flex-col  px-[39px] pt-12 pb-[46px] bg-white max-w-[434px] mx-auto rounded">
        <Image
          src={closeIcon}
          alt="close icon"
          className="absolute top-6 right-12"
        />
        <h2 className="mb-8 text-[#20496C] font-semibold text-2xl leading-[18px]">
          You`re ready to go!
        </h2>
        <p className="mb-8">
          A fully loaded self-service portal is now ready to deploy on your
          Shopify store.
        </p>
        <p className="mb-8">
          We’ve programmed it to follow industry best practices for shipping,
          return & exchange, and payment policy.
        </p>
        <p className="mb-8">
          You can customize these settings to fit your store policy anytime.
        </p>
        <p className="">
          Lastly,{" "}
          <span className="font-bold">
            nothing is live until you hit “Go Live”!
          </span>
        </p>
        <Button
          type="button"
          text="Start customizing"
          handleClick={handleCleanState}
        />
      </div>
    </div>
  );
};

export default SignupSuccessDesktop;
