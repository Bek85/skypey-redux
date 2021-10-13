import React from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
