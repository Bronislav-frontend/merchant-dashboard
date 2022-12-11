import useWindowSize from "../hooks/useWindowSize";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  const size = useWindowSize();
  return (
    <section
      className={`h-full md:bg-[url('../assets/bg.png')] lg:py-[51px] xl:py-0 ${
        size.height < 835 ? "md:py-[51px]" : "md:pb-[330px] md:pt-[132px]"
      }`}
    >
      {children}
    </section>
  );
};

export default Container;
