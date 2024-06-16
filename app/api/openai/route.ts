import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    const { messages } = await request.json();
    console.log('Received messages:', messages);

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: "user", content: messages }],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                },
            }
        );
        console.log('API response:', response.data.choices);
        return NextResponse.json({ result: response.data.choices[0].message });
    } catch (error) {
        // console.error('Error generating response:', error);
        return NextResponse.json({ error: 'Error generating response' }, { status: 500 });
    }
}
