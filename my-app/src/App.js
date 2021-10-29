import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './Components/Routes/Routes';
import {MainPage} from './Components/Competitions/MainPage';


function App() {
  return (
    <BrowserRouter>
      {/* <Routes /> */}
      <MainPage />
    </BrowserRouter>
  );
}

export default App;

