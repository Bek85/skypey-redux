import React from 'react';
import './ChatWindow.css';
import store from '../store';
import Header from '../components/Header';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
    </div>
  );
};

export default ChatWindow;
