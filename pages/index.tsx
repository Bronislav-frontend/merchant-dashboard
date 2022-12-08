import { useState } from "react";
import Container from "../components/Container";
import RegistrationProgress from "../components/RegisterFormComponents/RegistrationProgress";
import ContactsForm from "../components/RegisterFormComponents/ContactsForm";
import ConnectToShopify from "../components/RegisterFormComponents/ConnectToShopify";
import ConnectToEmail from "../components/RegisterFormComponents/ConnectToEmail";
import Logo from "../components/Logo";

const Signup = () => {
  const [step, setStep] = useState(1);
  console.log(step);
  const multiStepForm = () => {
    switch (step) {
      case 1:
        return <ContactsForm setStep={setStep} />;
      case 2:
        return <ConnectToShopify setStep={setStep} />;
      case 3:
        return <ConnectToEmail setStep={setStep} />;
      default:
    }
  };

  return (
    <>
      <Logo />
      <RegistrationProgress step={step} />
      {multiStepForm()}
    </>
  );
};

export default Signup;

// import { useState } from "react";
// import Container from "../components/Container";
// import ContactsForm from "../components/RegisterForm/ContactsForm";
// import ConnectToShopify from "../components/RegisterForm/ConnectToShopify";
// import TextUnderButton from "../components/TextUnderButton";
// import Logo from "../components/Logo";
// import TextArticle from "../components/TextArticle";

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   console.log(step)
//   const multiStepForm = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <TextArticle
//               title={"Welcome to Chad"}
//               paragraph={
//                 "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
//               }
//             />
//             <ContactsForm setStep={() => setStep(step + 1)} />
//             <TextUnderButton
//               linkText={"Already have an account?"}
//               spanText={"Login"}
//               route={"login"}
//             />
//           </>
//         );
//       case 2:
//         return <ConnectToShopify />;
//       default:
//     }
//   };

//   return (
//     <Container>
//       <Logo />
//       <TextArticle
//         title={"Welcome to Chad"}
//         paragraph={
//           "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
//         }
//       />
//       <ContactsForm />
//       <TextUnderButton
//         linkText={"Already have an account?"}
//         spanText={"Login"}
//         route={"login"}
//       />
//     </Container>
//   );
// };

// export default Signup;
