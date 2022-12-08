import { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import TextUnderButton from "./TextUnderButton";
import shownPassIcon from "../assets/passShown.png";
import hidenPassIcon from "../assets/passHiden.png";

const SignInForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Input
        spanText="Email"
        type="text"
        name="email"
        onChange={handleInputChange}
        value={userInfo.email}
        placeholder="megachad@trychad.com"
      />
      <label className="flex flex-col">
        <span className="mb-[8px]"> Password</span>
        <div className="flex relative">
          <input
            name="password"
            type={isPasswordShown ? "text" : "password"}
            value={userInfo.password}
            placeholder="Enter Password"
            onChange={handleInputChange}
            className="px-[17px] py-[10.5px] bg-[#F8F9FC] flex-1"
          />
          <Image
            src={isPasswordShown ? shownPassIcon : hidenPassIcon}
            alt="eye icon"
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            className="absolute top-4 right-3"
          />
        </div>
      </label>
      <button
        type="submit"
        className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mt-[32px] mb-[16px]"
      >
        Login
      </button>
      <TextUnderButton
        linkText={"Don’t have an account?"}
        spanText={"Join the waitlist"}
        route={"/"}
      />
    </form>
  );
};

export default SignInForm;