import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  console.log("Received messages:", messages);
  const mockDataPath = path.join(process.cwd(), "mockData.json");
  try {
    const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));
    console.log('efaef', mockData)
    const messageContent = messages;
    const matchingResponse = mockData.responses.find(
      (response: { question: string }) =>
        response.question.toLowerCase() === messageContent.toLowerCase()
    );

    if (matchingResponse) {
      console.log("Mock API response:", matchingResponse.response);
      return NextResponse.json({
        result: { message: matchingResponse.response },
      });
    } else {
      return NextResponse.json({
        result: { message: "Your question is invalid. Please type 'Hello' or 'What is react?'" },
      });
    }
  } catch (error) {
    console.error("Error reading mock data:", error);
    return NextResponse.json(
      { error: "Error reading mock data" },
      { status: 500 }
    );
  }
}
