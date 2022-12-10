interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="md:bg-[url('../assets/bg.png')] md:pt-[132px] lg:py-[51px] xl:py-0">
      {children}
    </section>
  );
};

export default Container;
