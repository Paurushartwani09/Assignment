import React from 'react';

const ChatBubble = ({ text }) => {
  return (
    <div className="chat-bubble d-flex align-items-start mb-3">
      <div className="avatar me-3">T</div>
      <div className="bubble p-3">
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
