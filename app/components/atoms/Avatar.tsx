import Image from "next/image";

interface Props {
  src: string;
}
const Avatar = ({ src }: Props) => {
  return <Image src={src} alt="avatar" className="rounded-full w-12 h-12" width={40} height={40}/>;
};

export default Avatar;
