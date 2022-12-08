interface TextArticleProps {
  title: string;
  paragraph: string;
}

const TextArticle = ({ title, paragraph }: TextArticleProps) => {
  return (
    <div>
      <h2 className="mb-[8px] font-semibold text-lg tracking-tight leading-[29px] text-[#134267]">
        {title}
      </h2>
      <p className="mb-[32px] font-normal text-sm leading-[21px] text-[#4F637D -tracking-[.01em]">
        {paragraph}
      </p>
    </div>
  );
};

export default TextArticle;
