"use client";

import UserQuestion from "../molecules/UserQuestion";
import BotResponse from "../molecules/BotResponse";
import UserAction from "../molecules/UserAction";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import crypto from 'crypto';

interface Props {
  userQuestions:any;
  id: string;
  botResponses: any;
}

interface Message {
    user: string;
    bot: string;
}

const Result = ({
  userQuestions,
  botResponses,
  id,
}: Props) => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messageBox: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const handleSubmit = async () => {
        setUserMessage('');
        try {
            const response = await fetch('/api/openai', {
                method: 'POST',
                body: JSON.stringify({ messages: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.result;
            console.log(botMessage)

            setMessages([...messages, { user: userMessage, bot: botMessage.message }]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };
    useEffect(() => {
      scrollBottomMessageBox();
    }, [messages])
    const scrollBottomMessageBox = () => {
      if (messageBox.current) {
        messageBox.current.scrollTo({
          top: messageBox.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    };
    
    const generateRandomKey = () => {
      return crypto.randomBytes(16).toString('hex');
  };
  return (
    <div className="relative w-full">
      <div className="w-full bottom-0 left-0 bg-white p-4">
        <UserAction
          buttonTextColor="white"
          buttonBgColor="green-700"
          buttonText="Result"
          Submit={handleSubmit}
          userMessage = {userMessage}
          setUserMessage= {setUserMessage}
        />
      </div>
      {messages.length > 0 && <div ref={messageBox} className="overflow-y-auto w-full bg-slate-100 rounded-md text-black max-h-[50vh] border p-4">
        {messages?.map((message, index) => {
           const botResponseKey = generateRandomKey();
          return (
            <>
             <UserQuestion
             key={index}
            avatarSrc={userQuestions.avatarSrc}
            questionText={message.user}
          />
              <BotResponse
              key={botResponseKey }
            avatarSrc={botResponses.avatarSrc}
            responseText={message.bot}
          /></>
          )
        })}
      </div>}
    </div>
  );
};

export default Result;
