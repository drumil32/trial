import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'You', text: input };
    const botMsg = {
      sender: 'Bot',
      text:
        input.toLowerCase().includes('hello')
          ? 'Hi there!'
          : input.toLowerCase().includes('bye')
          ? 'Goodbye!'
          : "I'm not sure what you said.",
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chat-header">🤖 ChatBot</div>
      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
    </div>
  );
}

export default App;
