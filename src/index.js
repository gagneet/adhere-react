import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const [, , light] = [
  "boots",
  "tents",
  "headlamp"
]
console.log(light);

ReactDOM.render(
    <App authorized={false}/>,
  document.getElementById('root')
);
