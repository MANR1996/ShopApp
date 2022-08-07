import React from 'react';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Shopping from './components/Shopping'
import AlsoLike from './components/AlsoLike'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Shopping />
      <AlsoLike />
    </div>
  );
}

export default App;
