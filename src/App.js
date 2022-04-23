import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Nimfre">
      <header className="Nimfre-header">
        <img src={logo} className="Nimfre-logo" alt="logo" />
        <p>
          Edit <code>src/Nimfre.js</code> and save to reload.
        </p>
        <a
          className="Nimfre-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
