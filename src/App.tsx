import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navication from './components/menu';
import Blog from './pages/blog';

function App() {
  return (
    <>
      <div style={
        {
          fontFamily: 'Kantumruy Pro'
        }
      }>
        <Navication />
        <Blog />
      </div>
    </>

  );
}

export default App;
