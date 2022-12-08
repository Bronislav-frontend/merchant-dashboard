import Link from "next/link";
import Image from "next/image";
import bg from "../assets/error404.jpg";

const Error = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#E6E9F2] h-screen space-y-4">
      <Image src={bg} alt="error 404 picture" />
      <h1 className="text-lg font-bold">Something went wrong...</h1>
      <Link
        href={"/"}
        className="bg-[#384564] text-white font-medium text-btn  px-[30px] py-[18px] rounded-lg tracking-[0.5px]"
      >
        GO BACK
      </Link>
    </div>
  );
};

export default Error;
