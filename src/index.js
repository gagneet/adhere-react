import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement(
    "h1", 
    {style: {color: "blue"}}, 
    "React App"
  ),
  document.getElementById('root')
);
