import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AIHandler } from './ai/chatHandler';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialise AI handler
const aiHandler = new AIHandler();

// Routes
app.get('/', (req, res) => {
  res.send('AI Chat Backend is running!');
});

// POST route for chat messages
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await aiHandler.getChatResponse(message, context);

    res.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({
      error: 'Failed to process chat message',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Start the server
app.listen(port, () => {
  console.log(`AI Chat Backend is running on http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
