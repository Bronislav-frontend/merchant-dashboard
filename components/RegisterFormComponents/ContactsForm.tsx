import React, { useState } from "react";
import Image from "next/image";
import TextArticle from "../TextArticle";
import Input from "../Input";
import TextUnderButton from "../TextUnderButton";
import shownPassIcon from "../../assets/passShown.png";
import hidenPassIcon from "../../assets/passHiden.png";

interface ContactsFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ContactsForm = ({ setStep }: ContactsFormProps) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
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
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <TextArticle
        title={"Welcome to Chad"}
        paragraph={
          "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
        }
      />

      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          spanText="Email"
          name="email"
          type="text"
          value={userInfo.email}
          placeholder="megachad@trychad.com"
          onChange={handleInputChange}
        />
        <Input
          spanText="Your Name"
          name="name"
          type="text"
          value={userInfo.name}
          placeholder="Mega Chad"
          onChange={handleInputChange}
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
          Create account
        </button>
        <TextUnderButton
          linkText={"Already have an account?"}
          spanText={"Login"}
          route={"login"}
        />
      </form>
    </>
  );
};

export default ContactsForm;
