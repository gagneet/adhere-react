import logo from './logo.svg';
import './App.css';
import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>First {props.name} App</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p> Serving the {props.adjective} web pages over the Internet</p>
      <img 
        src={logo} 
        height={200} 
        alt="The React Org" 
      />
      <img 
        src="https://github.com/gagneet.png"
        height={200}
        alt="GitHub Profile"
      />
      <ul style={{textAlign: 'left'}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>
          {dish.title}
        </li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>This goes at the bottom of my page for {props.year}!</p>
    </footer>
  )
}

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

const dishes = [
  "Macaroni",
  "Chicken",
  "Bhindi",
  "Salmon"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));


function App(props) {
  if(props.authorized) {
    return (
      <SecretComponent />
    )
  } else {
      return (
        <React.Fragment>
          <RegularComponent />
          <div className="App">
            <Header name="AdhereLive"/>
            <Main adjective="amazing" dishes={dishObjects}/>
            <Footer year={new Date().getFullYear()}/>
          </div>
        </React.Fragment>
      );
  }
}

export default App;
