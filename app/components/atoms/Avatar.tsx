interface Props {
  src: string;
}
const Avatar = ({ src }: Props) => {
  return <img src={src} alt="avatar" className="rounded-full w-12 h-12" />;
};

export default Avatar;
