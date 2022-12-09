// import { useState } from "react";
// import Image from "next/image";
// import { Formik, Form } from "formik";
// import { SignupSchema } from "./Yup.schema";
// import TextArticle from "../TextArticle";
// import Input from "../Input";
// import TextUnderButton from "../TextUnderButton";
// import { userCredentials } from "../../interfaces/interfaces";
// import shownPassIcon from "../../assets/passShown.png";
// import hidenPassIcon from "../../assets/passHiden.png";

// interface ContactsFormProps {
//   setStep: React.Dispatch<React.SetStateAction<number>>;
//   registerInfo: userCredentials;
//   setRegisterInfo: React.Dispatch<React.SetStateAction<userCredentials>>;
// }

// interface FormValues {
//   email: string;
//   name: string;
//   password: string;
// }

// const ContactsForm = ({
//   setStep,
//   registerInfo,
//   setRegisterInfo,
// }: ContactsFormProps) => {
//   const [isPasswordShown, setIsPasswordShown] = useState(false);
//   const initialValues: FormValues = { email: "", name: "", password: "" };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRegisterInfo((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(name);
//     setRegisterInfo((prevState) => ({
//       ...prevState,
//     }));
//     setStep((prevStep) => prevStep + 1);
//   };

//   return (
//     <>
//       <TextArticle
//         title={"Welcome to Chad"}
//         paragraph={
//           "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
//         }
//       />
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <Input
//           spanText="Email"
//           name="email"
//           type="text"
//           value={registerInfo.email}
//           placeholder="megachad@trychad.com"
//           onChange={handleInputChange}
//         />
//         <Input
//           spanText="Your Name"
//           name="name"
//           type="text"
//           value={registerInfo.name}
//           placeholder="Mega Chad"
//           onChange={handleInputChange}
//         />
//         <label className="flex flex-col">
//           <span className="mb-[8px] font-medium text-xs leading-[18px]">
//             Password
//           </span>
//           <div className="flex relative">
//             <input
//               name="password"
//               type={isPasswordShown ? "text" : "password"}
//               value={registerInfo.password}
//               placeholder="Enter Password"
//               onChange={handleInputChange}
//               className="px-[17px] py-[10.5px] bg-[#F8F9FC] flex-1 placeholder:text-[#C3CAD5]"
//             />
//             <Image
//               src={isPasswordShown ? shownPassIcon : hidenPassIcon}
//               alt="eye icon"
//               onClick={() => setIsPasswordShown(!isPasswordShown)}
//               className="absolute top-3.5 right-3"
//             />
//           </div>
//         </label>
//         <button
//           type="submit"
//           className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mt-[32px] mb-[16px]"
//         >
//           Create account
//         </button>
//         <TextUnderButton
//           linkText={"Already have an account?"}
//           spanText={"Login"}
//           route={"login"}
//         />
//       </form>
//     </>
//   );
// };

// export default ContactsForm;

import { useState } from "react";
import Image from "next/image";
import { Formik, Form, ErrorMessage } from "formik";
import { SignupSchema } from "./Yup.schema";
import TextArticle from "../TextArticle";
import Input from "../Input";
import TextUnderButton from "../TextUnderButton";
import { userCredentials } from "../../interfaces/interfaces";
import shownPassIcon from "../../assets/passShown.png";
import hidenPassIcon from "../../assets/passHiden.png";

interface ContactsFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRegisterInfo: React.Dispatch<React.SetStateAction<userCredentials>>;
}

interface FormValues {
  email: string;
  name: string;
  password: string;
}

const ContactsForm = ({ setStep, setRegisterInfo }: ContactsFormProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const initialValues: FormValues = { email: "", name: "", password: "" };

  const handleSubmit = ({ email, name, password }: FormValues) => {
    setRegisterInfo((prevState) => ({
      ...prevState,
      email,
      name,
      password,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  console.log(Formik);

  return (
    <>
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
          console.log(values);
          console.log(touched);
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
                    className={`px-[17px] py-[10.5px] bg-[#F8F9FC] rounded flex-1 placeholder:text-[#C3CAD5] ${
                      errors.password &&
                      touched.password &&
                      "border border-[#D24646]"
                    }`}
                  />
                  <Image
                    src={isPasswordShown ? shownPassIcon : hidenPassIcon}
                    alt="eye icon"
                    onClick={() => setIsPasswordShown(!isPasswordShown)}
                    className="absolute top-3.5 right-3"
                  />
                </div>

                {errors.password && touched.password && (
                  <p className="text-[#D24646] text-xs">{errors.password}</p>
                )}
              </label>
              <button
                type="submit"
                disabled={!isValid}
                className="bg-[#32ABF2] py-[11px] rounded-lg  text-center text-white mt-[32px] mb-[16px]"
              >
                Create account
              </button>
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
