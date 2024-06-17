
import Title from "@/components/atoms/Title";
import { botResponses, userQuestions } from "../constant/enum";
import { customAlphabet } from 'nanoid'
import Result from "@/components/organisms/Result";

export default function Home() {
  const nanoid = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    7
  )
  return (
    <main className="min-h-screen bg-white text-black items-center justify-between p-24">
      <Title text="Simple ChatGPT" color="#2563eb"/>
      <Result userQuestions={userQuestions} botResponses={botResponses} id={nanoid()}/>
    </main>
  );
}
