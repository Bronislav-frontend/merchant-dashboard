import { useState, useContext } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import { SignupSchema } from "../../helpers/Yup.schema";
import Logo from "../Logo";
import RegistrationProgress from "./RegistrationProgress";
import { UserInfo } from "../../interfaces/interfaces";
import FormValuesContext from "../../context/FormContext";
import TextArticle from "../TextArticle";
import Input from "../Input";
import Button from "../Button";
import TextUnderButton from "../TextUnderButton";
import shownPassIcon from "../../assets/passShown.png";
import hidenPassIcon from "../../assets/passHiden.png";

interface ContactsFormProps {
  isProgressbarHidden: boolean;
  setIsProgressbarHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactsForm = ({
  isProgressbarHidden,
  setIsProgressbarHidden,
}: ContactsFormProps) => {
  const { handleAddFormValues, handleChangeStep } =
    useContext(FormValuesContext);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const initialValues: UserInfo = { email: "", name: "", password: "" };

  const handleSubmit = (info: UserInfo) => {
    handleAddFormValues(info);
    setIsProgressbarHidden(false);
    handleChangeStep(2);
  };

  return (
    <>
      <Logo />
      {!isProgressbarHidden && <RegistrationProgress />}
      <TextArticle
        title={"Welcome to Chad"}
        paragraph={
          "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
        }
      />
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, errors, isValid, touched, handleBlur }) => {
          return (
            <Form className="flex flex-col">
              <Input
                spanText="Email"
                name="email"
                type="text"
                value={values.email}
                placeholder="megachad@trychad.com"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <Input
                spanText="Your Name"
                name="name"
                type="text"
                value={values.name}
                placeholder="Mega Chad"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
              <label className="flex flex-col">
                <span className="mb-[8px] font-medium text-xs leading-[18px]">
                  Password
                </span>
                <div className="flex relative mb-2">
                  <input
                    name="password"
                    type={isPasswordShown ? "text" : "password"}
                    value={values.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`px-[17px] py-[10.5px] bg-[#F8F9FC] rounded flex-1 placeholder:text-[#C3CAD5] focus:outline-none focus:border focus:border-[#32ABF2] focus:bg-white ${
                      errors.password &&
                      touched.password &&
                      "border border-[#D24646] focus:outline-none focus:border focus:border-[#D24646]"
                    }`}
                  />
                  <Image
                    src={isPasswordShown ? hidenPassIcon : shownPassIcon}
                    alt="eye icon"
                    onClick={() => setIsPasswordShown(!isPasswordShown)}
                    className="absolute top-3.5 right-3"
                  />
                </div>

                {errors.password && touched.password && (
                  <p className="text-[#D24646] text-xs">{errors.password}</p>
                )}
              </label>
              <Button
                type="submit"
                isDisabled={!isValid}
                text="Create account"
              />
              <TextUnderButton
                linkText={"Already have an account?"}
                spanText={"Login"}
                route={"login"}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactsForm;
