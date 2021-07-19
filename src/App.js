import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>First {props.name} App</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p> Serving the best web pages over the Internet</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>This goes at the bottom of my page!</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header name="AdhereLive"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
