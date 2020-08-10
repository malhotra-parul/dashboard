import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
     <Header />
     <Sidebar />
     <Content />
    </div>
  );
}

export default App;
