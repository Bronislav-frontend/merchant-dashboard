import { useContext } from "react";
import FormValuesContext from "../context/FormContext";
import Image from "next/image";
import Router from "next/router";
import successBigIcon from "../assets/successBig.png";
import SignupSuccessDesktop from "./DesktopComponents/SignupSuccessDesktop";
import useWindowSize from "../hooks/useWindowSize";

interface SuccessLayoutProps {
  shopName: string;
}

const SuccessLayout = ({ shopName }: SuccessLayoutProps) => {
  const { handleCleanState } = useContext(FormValuesContext);
  const size = useWindowSize();

  return (
    <>
      {size.width < 1280 && (
        <div className=" bg-white pt-[112px] md:pt-0 px-8 xl:py-[62px] h-min">
          <article className="flex flex-col justify-center items-center relative">
            <Image
              src={successBigIcon}
              alt="shop image"
              width={160}
              height={160}
              className="rounded-full mb-8"
            />
            <h3 className="text-[#134267] font-medium leading-[19px] mb-2">
              You’re ready to go!
            </h3>
            <p className="text-center mb-4 text-sm leading-[21px]">
              Chad doesn’t support mobile browsers. To access your dashboard,
              login from your laptop or desktop computer.
            </p>
          </article>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => {
                handleCleanState();
                Router.push("/login");
              }}
              className=" bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mb-[16px]"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {size.width >= 1280 && <SignupSuccessDesktop shopName={shopName} />}
    </>
  );
};

export default SuccessLayout;
