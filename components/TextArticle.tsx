interface TextArticleProps {
  title: string;
  paragraph: string;
}

const TextArticle = ({ title, paragraph }: TextArticleProps) => {
  return (
    <div>
      <h2 className="mb-[8px]">{title}</h2>
      <p className="mb-[32px]">{paragraph}</p>
    </div>
  );
};

export default TextArticle;
