import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>First React App</h1>
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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
