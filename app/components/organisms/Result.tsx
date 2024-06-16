"use client";

import UserQuestion from "../molecules/UserQuestion";
import BotResponse from "../molecules/BotResponse";
import UserAction from "../molecules/UserAction";
import { useState } from "react";

interface Props {
  userQuestions: Array<any>;
  id: string;
  initialMessages?: Message[];
  botResponses: Array<any>;
}

interface Message {
    user: string;
    bot: string;
}

const Result = ({
  userQuestions,
  botResponses,
  id,
  initialMessages,
}: Props) => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/openai', {
                method: 'POST',
                body: JSON.stringify({ messages: 'text' }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.result;
            console.log(botMessage)

            setMessages([...messages, { user: userMessage, bot: botMessage.content }]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };
  return (
    <div className="relative w-full">
      <div className="w-full bottom-0 left-0 bg-white p-4">
        <UserAction
          buttonTextColor="white"
          buttonBgColor="green-700"
          buttonText="Result"
          Submit={handleSubmit}
        />
      </div>
      <div className="overflow-y-auto w-full bg-slate-100 rounded-md text-black max-h-96 border p-4">
        {userQuestions.map((q: any, index) => (
          <UserQuestion
            key={index}
            avatarSrc={q.avatarSrc}
            questionText={q.questionText}
          />
        ))}
        {botResponses.map((r: any, index) => (
          <BotResponse
            key={index}
            avatarSrc={r.avatarSrc}
            responseText={r.responseText}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
