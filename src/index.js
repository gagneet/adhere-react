import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function App2() {
  return (
    <h1>This is the content from App 2!</h1>
  )
}

ReactDOM.render(
  <React.Fragment>
    <App authorized={false}/>
    <App2 />
  </React.Fragment>,
  document.getElementById('root')
);
