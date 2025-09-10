// Simple test script for the AI chat API
const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3001';

async function testAPI() {
  console.log('Testing AI Chat API...\n');

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch(`${API_BASE}/api/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);

    // Test chat endpoint
    console.log('\n2. Testing chat endpoint...');
    const chatResponse = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello! Can you tell me a short joke?',
      }),
    });

    if (chatResponse.ok) {
      const chatData = await chatResponse.json();
      console.log('✅ Chat response:', chatData);
    } else {
      console.log(
        '❌ Chat API error:',
        chatResponse.status,
        await chatResponse.text()
      );
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log(
      '\nMake sure the backend server is running with: npm run dev:ts'
    );
  }
}

testAPI();
