import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary]);

  console.log(emotion);
  return (
    <>
      <h1>Hello World! Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("happy")}>
        Make Happy
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrated
      </button>
      <button onClick={() => setEmotion("angry")}>
        Angry
      </button>
      <button onClick={() => setSecondary("crabby")}>
        Make Crabby
      </button>
    </>
  )
}

export default App;
