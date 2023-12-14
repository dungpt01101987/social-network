// Chat.js
import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const fetchChatHistory = async () => {
        const response = await fetch('/api/chat/history');
        const history = await response.json();
        setChatHistory(history);
    };

    const sendMessage = async () => {
        await fetch('/api/chat/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
                sender: 'User', // You can customize the sender
            }),
        });
        setMessage('');
        fetchChatHistory();
    };

    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <div>
            <div>
                {chatHistory.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
