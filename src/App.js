import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return (
    <>
      <h1>Hello World! Current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrated
      </button>
      <button onClick={() => setEmotion("angry")}>
        Angry
      </button>
    </>
  )
}

export default App;
