import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement(
    "ul", 
    {style: {color: "blue"}}, 
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
    React.createElement("li", null, "Thursday"),
    React.createElement("li", null, "Friday"),
    React.createElement("li", null, "Saturday"),
    React.createElement("li", null, "Sunday")
  ),
  document.getElementById('root')
);
