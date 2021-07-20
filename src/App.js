import logo from './logo.svg';
import './App.css';
import React from 'react';

function SecretComponent() {
  return (
    <h1>Super Secret Information for Authorized Users only</h1>
  )
}

function RegularComponent() {
  return (
    <h1>Information for All Users</h1>
  )
}


function App(props) {
  if(props.authorized) {
    return (
      <SecretComponent />
    )
  } else {
    return (
      <RegularComponent />
    );
  }
}

export default App;
