import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>First React App</h1>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Main Page that is to be redered</h2>
      <h3>Footer on the Page</h3>
    </div>
  );
}

export default App;
