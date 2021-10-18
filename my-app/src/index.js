import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataProvider } from './Context/DataContext';
import {reducer, initialState} from './Reducer/Reducer';

ReactDOM.render(
   <DataProvider reducer={reducer} initialState={initialState}>
      <App />
   </DataProvider>   ,
  document.getElementById('root')
);

