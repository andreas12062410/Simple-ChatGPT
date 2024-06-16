'use client'

import { useState } from 'react';

const QuestionInput = () => {
  const [question, setQuestion] = useState('');

  return (
    <input
      type="text"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Type your question..."
      className="border p-2 w-full"
    />
  );
};

export default QuestionInput;
