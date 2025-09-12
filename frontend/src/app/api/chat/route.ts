import { NextRequest, NextResponse } from "next/server";
import { AIHandler } from "../../../../backend/ai/chatHandler";

// Initialize AI handler (this will be reused across requests)
let aiHandler: AIHandler;

const initializeAI = () => {
  if (!aiHandler) {
    aiHandler = new AIHandler();
  }
  return aiHandler;
};

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const aiHandlerInstance = initializeAI();
    const response = await aiHandlerInstance.getChatResponse(message, context);

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
