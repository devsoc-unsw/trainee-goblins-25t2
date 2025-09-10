import React, { useEffect, useRef, useState } from 'react';

interface Message {
    sender: string;
    text: string;
    isUser: boolean;
}

export default function Chatbox() {
    // initialising messages and newMessage (state)
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = messagesRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages]);

    // function for sending message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: 'You', text: newMessage, isUser: true}]);
            setNewMessage('');
        }
    };

    return (
        <div className="chatbox w-[60vw] flex flex-col">
            <div className="messages-container flex flex-col justify-end h-[70vh]">
                <div ref={messagesRef} className="messages overflow-y-auto flex-1 flex flex-col">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.isUser ? 'user' : 'bot'} flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-2`}
                        >
                            <div
                                className={`${message.isUser ? 'bg-[#D9DCE8]' : 'bg-gray-200'} text-gray-900 px-3 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap break-words shadow-sm`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                        

            <div className="input-area flex w-full gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 w-full px-3 py-2 border border-[#38405f] rounded"
                />
                <button onClick={handleSendMessage} className="w-24 px-4 py-2 bg-[#d9dce8] text-black border-[#38405f] rounded hover:bg-[#38405f] hover:text-white transition-colors">Send</button>
            </div>
        </div>
    );
}