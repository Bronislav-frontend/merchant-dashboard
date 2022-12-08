interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="px-[32px] pt-[16px] pb-[28px]">{children}</section>
  );
};

export default Container;
