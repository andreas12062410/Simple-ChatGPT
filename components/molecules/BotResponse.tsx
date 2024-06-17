import Avatar from "../atoms/Avatar";
import MessageBox from "../atoms/MessageBox";
interface Props {
  avatarSrc: string;
  responseText: string;
}
const BotResponse = ({ avatarSrc, responseText }: Props) => {
  return (
    <div className="flex w-[80%] float-end items-start space-x-4">
      <MessageBox text={responseText} />
      <Avatar src={avatarSrc} />
    </div>
  );
};

export default BotResponse;
