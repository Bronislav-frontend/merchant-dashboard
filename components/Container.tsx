interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="md:bg-[url('../assets/bg.png')] md:pt-[132px] lg:py-[51px]">
      {children}
    </section>
  );
};

export default Container;
