'use client'

import { useState } from 'react';
interface Props {
  userMessage: string;
  setUserMessage: (message: string) => void;

}
const QuestionInput = ({userMessage, setUserMessage} : Props) => {

  return (
    <input
      type="text"
      value={userMessage}
      onChange={(e) =>{ setUserMessage(e.target.value)}}
      placeholder="Type your question..."
      className="border p-2 w-full"
    />
  );
};

export default QuestionInput;
