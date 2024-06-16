interface Props {
  color: string;
  text: string;
}

const Title = ({ color, text }: Props) => {
  return <h1 className={`text-[${color}] m-auto text-center text-2xl font-bold`}>{text}</h1>;
};
export default Title;
