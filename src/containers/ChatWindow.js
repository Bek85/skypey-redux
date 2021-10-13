import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ activeUserId }) => {
  return (
    <div className="ChatWindow">Conversation for user id: {activeUserId}</div>
  );
};

export default ChatWindow;
