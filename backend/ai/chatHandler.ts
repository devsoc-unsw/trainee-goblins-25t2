// backend/ai/chatHandler.ts
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

export class AIHandler {
  private openai: OpenAI;
  private anthropic: Anthropic;

  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    this.anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }

  async getChatResponse(message: string, context?: string): Promise<string> {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message }
        ],
        max_tokens: 500
      });
      
      return response.choices[0].message.content || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error('AI API error:', error);
      throw new Error('Failed to get AI response');
    }
  }

  async getMemorySummary(memories: string[]): Promise<string> {
    // Custom logic for memory summarization
    const prompt = `Summarize these memories: ${memories.join(', ')}`;
    // ... AI processing
  }
}



