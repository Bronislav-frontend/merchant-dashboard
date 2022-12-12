import { useState } from "react";
import { toast } from "react-toastify";
import UserResponseSuccess from "./UserResponseSuccess";
import TextArticle from "./TextArticle";
import Button from "./Button";

interface UserDoNotUseProps {
  title: string;
  text: string;
  platformsArray: string[];
  pText: string;
  isUsing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDoNotUse = ({
  title,
  text,
  platformsArray,
  pText,
  isUsing,
}: UserDoNotUseProps) => {
  const [platform, setPlatform] = useState("");
  const [showOnSuccessRespond, setShowOnSuccessRespond] = useState(false);

  const handlePlatformChoose = (value: string) => {
    setPlatform(value);
  };

  const handleSubmit = () => {
    setShowOnSuccessRespond(true);
    toast.success(`Your answer with platform ${platform} sent`);
  };

  return (
    <>
      {!showOnSuccessRespond && (
        <div>
          <TextArticle title={title} paragraph={text} />
          <label className="flex flex-col">
            <span className="mb-2">Platform</span>

            <select
              name="platform"
              onChange={(e) => handlePlatformChoose(e.target.value)}
              required
              className="pl-[17px] py-[10.5px] form-select form-select-lg mb-3 block w-full text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-[#32ABF2] focus:outline-none"
            >
              {platformsArray.map((platform: string, index: number) => (
                <option
                  className="px-[10px] py-[16px]"
                  key={index}
                  value={platform}
                >
                  {platform}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-col">
            <Button type="submit" text="Submit" handleClick={handleSubmit} />
            <p className="text-center">
              {pText}
              <span
                onClick={() => isUsing(true)}
                className="cursor-pointer text-[#32ABF2]"
              >
                Connect
              </span>
            </p>
          </div>
        </div>
      )}
      {showOnSuccessRespond && (
        <UserResponseSuccess
          title="Response received"
          text="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform."
        />
      )}
    </>
  );
};

export default UserDoNotUse;
