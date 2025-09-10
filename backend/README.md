# AI Chat Backend

This backend provides AI chat functionality using OpenAI's GPT-3.5-turbo model.

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   - Copy `env.example` to `.env`
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```

3. **Run the server:**

   ```bash
   # Development mode with TypeScript
   npm run dev:ts

   # Or build and run
   npm run build
   npm start
   ```

## API Endpoints

- `GET /` - Health check
- `GET /api/health` - Detailed health status
- `POST /api/chat` - Send a chat message

### Chat API Usage

```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

Response:

```json
{
  "response": "Hello! I'm doing well, thank you for asking...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Environment Variables

- `OPENAI_API_KEY` (required): Your OpenAI API key
- `PORT` (optional): Server port (default: 3001)
- `NODE_ENV` (optional): Environment (development/production)
