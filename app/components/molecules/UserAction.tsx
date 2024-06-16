import Title from "../atoms/Title";
import QuestionInput from "../atoms/QuestionInput";
import ResultButton from "../atoms/ResultButton";

interface Props {
  buttonTextColor: string;
  buttonBgColor: string;
  buttonText: string;
  Submit: () => void;
}
const UserAction = ({ buttonTextColor, buttonBgColor, buttonText, Submit }: Props) => {
  return (
    <div className="p-4 flex gap-4 justify-start">
      <QuestionInput />
      <ResultButton
        textColor={buttonTextColor}
        bgColor={buttonBgColor}
        text={buttonText}
        Submit = {Submit}
      />
    </div>
  );
};

export default UserAction;
