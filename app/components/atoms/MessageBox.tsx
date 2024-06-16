interface Props {
    text: string
}
const MessageBox = ({ text }: Props) => {
    return <div className="border w-full p-4 mb-4 rounded-md bg-blue-100 border-blue-500">{text}</div>;
  };
  
  export default MessageBox;
  