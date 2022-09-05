import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Não é legal utilizar css inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizad de forma inline
      </p>
    </div>
  );
}

export default App;
