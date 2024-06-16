import Avatar from '../atoms/Avatar';
import MessageBox from '../atoms/MessageBox';
interface Props {
    avatarSrc : string;
    questionText: string
}
const UserQuestion = ({ avatarSrc, questionText }: Props) => {
  return (
    <div className="flex w-[80%] float-left items-start space-x-4">
      <Avatar src={avatarSrc} />
      <MessageBox text={questionText} />
    </div>
  );
};

export default UserQuestion;
