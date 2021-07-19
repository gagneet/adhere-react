import logo from './logo.svg';
import './App.css';

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

const dishes = [
  "Macaroni",
  "Chicken",
  "Bhindi",
  "Salmon"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));


function App() {
  return (
    <div className="App">
      <Header name="AdhereLive"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
