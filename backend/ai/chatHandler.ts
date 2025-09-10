// backend/ai/chatHandler.ts
import OpenAI from 'openai';

export class AIHandler {
  private openai: OpenAI;

  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is required');
    }

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async getChatResponse(message: string, context?: string): Promise<string> {
    try {
      const systemMessage = context
        ? `You are a helpful AI assistant. Context: ${context}`
        : 'You are a helpful AI assistant. Be friendly, informative, and engaging in your responses.';

      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: message },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No response content received from OpenAI');
      }

      return content;
    } catch (error) {
      console.error('AI API error:', error);

      // Handle quota exceeded error with fallback response
      if (error instanceof Error && error.message.includes('quota')) {
        return this.getFallbackResponse(message);
      }

      if (error instanceof Error) {
        throw new Error(`Failed to get AI response: ${error.message}`);
      }
      throw new Error('Failed to get AI response');
    }
  }

  private getFallbackResponse(message: string): string {
    const fallbackResponses = [
      "I'm currently experiencing high demand and can't process your request right now. Please try again later!",
      "Sorry, I'm temporarily unavailable. Please check back in a few minutes.",
      "I'm having trouble connecting to my AI service. Please try again later!",
      "Thanks for your message! I'm currently experiencing some technical difficulties. Please try again in a moment.",
    ];

    // Simple keyword-based responses for common questions
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm currently experiencing some technical difficulties, but I'd love to chat with you once I'm back online!";
    }

    if (lowerMessage.includes('how are you')) {
      return "I'm doing well, thank you for asking! Though I'm having some connectivity issues at the moment.";
    }

    if (lowerMessage.includes('help')) {
      return "I'd be happy to help! Unfortunately, I'm experiencing some technical difficulties right now. Please try again later!";
    }

    // Return a random fallback response
    return fallbackResponses[
      Math.floor(Math.random() * fallbackResponses.length)
    ];
  }
}
