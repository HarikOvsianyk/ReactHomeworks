import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Actions} from './Actions/Actions';

ReactDOM.render(
   <Actions>
      <App />
   </Actions>,
  document.getElementById('root')
);

