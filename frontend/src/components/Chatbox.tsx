import React, { useEffect, useRef, useState } from "react";

interface Message {
  sender: string;
  text: string;
  isUser: boolean;
}

export default function Chatbox() {
  // initialising messages and newMessage (state)
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  // function for sending message
  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading) {
      const userMessage = newMessage.trim();
      setNewMessage("");
      setIsLoading(true);

      // Add user message to chat
      const updatedMessages = [
        ...messages,
        { sender: "You", text: userMessage, isUser: true },
      ];
      setMessages(updatedMessages);

      try {
        // Call backend API
        const apiUrl =
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_API_URL ||
              "https://your-backend-url.railway.app/api/chat"
            : "http://localhost:3001/api/chat";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            context:
              messages.length > 0 ? "Previous conversation context" : undefined,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Add AI response to chat
        setMessages([
          ...updatedMessages,
          {
            sender: "AI Assistant",
            text: data.response,
            isUser: false,
          },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
        // Add error message to chat
        setMessages([
          ...updatedMessages,
          {
            sender: "System",
            text: "Sorry, I encountered an error. Please try again.",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="chatbox flex w-[60vw] flex-col">
      <div className="messages-container flex h-[70vh] flex-col justify-end">
        <div
          ref={messagesRef}
          className="messages flex flex-1 flex-col overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? "user" : "bot"} flex ${message.isUser ? "justify-end" : "justify-start"} mb-2`}
            >
              <div
                className={`${message.isUser ? "bg-[#D9DCE8]" : "bg-gray-200"} max-w-[75%] rounded-xl px-3 py-2 break-words whitespace-pre-wrap text-gray-900 shadow-sm`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot mb-2 flex justify-start">
              <div className="max-w-[75%] rounded-xl bg-gray-200 px-3 py-2 break-words whitespace-pre-wrap text-gray-900 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-gray-600"></div>
                  <span>AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="input-area flex w-full gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={isLoading ? "AI is thinking..." : "Type your message..."}
          onKeyPress={(e) =>
            e.key === "Enter" && !isLoading && handleSendMessage()
          }
          disabled={isLoading}
          className={`w-full flex-1 rounded border border-[#38405f] px-3 py-2 ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !newMessage.trim()}
          className={`w-24 rounded border-[#38405f] px-4 py-2 transition-colors ${
            isLoading || !newMessage.trim()
              ? "cursor-not-allowed bg-gray-300 text-gray-500"
              : "bg-[#d9dce8] text-black hover:bg-[#38405f] hover:text-white"
          }`}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
