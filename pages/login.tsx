import Logo from "../components/Logo";
import TextArticle from "../components/TextArticle";
import SignInForm from "../components/SignInForm";

const LoginPage = () => {
  return (
    <div className="xl:py-40">
      <div className="px-[32px] pt-[16px] pb-[28px] md:bg-white md:px-[72px] md:pt-[80px] md:pb-[64px] md:rounded-lg md:shadow-card md:max-w-[540px] md:mx-auto xl:max-w-[480px]">
        <Logo />
        <TextArticle
          title={"Welcome back"}
          paragraph={"Feeling ready to take on the day? Chad is too!"}
        />
        <SignInForm />
      </div>
    </div>
  );
};

export default LoginPage;
