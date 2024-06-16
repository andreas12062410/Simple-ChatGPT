interface Props {
  textColor: string;
  bgColor: string;
  text: string;
  Submit: () => void;
}
const ResultButton = ({ textColor, bgColor, text, Submit }: Props) => {
  return (
    <button
      className={`text-${textColor} bg-${bgColor} p-2 rounded`}
      onClick={Submit}
    >
      {text}
    </button>
  );
};

export default ResultButton;
