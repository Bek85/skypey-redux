import React, { useMemo } from 'react';
import './ChatWindow.css';
import _ from 'lodash';
import store from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = useMemo(
    () => state.messages[activeUserId],
    [state, activeUserId]
  );
  const messages = useMemo(() => _.values(activeMsgs), [activeMsgs]);

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={messages} />
    </div>
  );
};

export default ChatWindow;
