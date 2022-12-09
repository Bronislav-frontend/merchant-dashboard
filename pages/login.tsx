import Logo from "../components/Logo";
import TextArticle from "../components/TextArticle";
import SignInForm from "../components/SignInForm";
import useCheckMobileScreen from "../hooks/useWindowSize";

const LoginPage = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <Logo />
      <TextArticle
        title={"Welcome back"}
        paragraph={"Feeling ready to take on the day? Chad is too!"}
      />
      <SignInForm />
    </>
  );
};

export default LoginPage;
