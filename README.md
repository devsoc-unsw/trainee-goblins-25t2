# Trainee Goblins 25T2

A full-stack application with AI chat functionality powered by OpenAI's GPT-3.5-turbo.

## Features

- 🤖 AI-powered chat interface using OpenAI's GPT-3.5-turbo
- ⚛️ React frontend with modern UI
- 🚀 Express.js backend with TypeScript
- 💬 Real-time chat with loading states

## Quick Start

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp env.example .env
   # Edit .env and add your OpenAI API key
   ```

4. Start the backend server:
   ```bash
   npm run dev:ts
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to the frontend URL (usually `http://localhost:3000`)
2. Use the chat interface to send messages to the AI
3. The AI will respond using GPT-3.5-turbo

## API Documentation

The backend provides a REST API for chat functionality. See `backend/README.md` for detailed API documentation.

## Requirements

- Node.js (v16 or higher)
- OpenAI API key
- npm or yarn package manager
