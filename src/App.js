import PastMatches from "./components/PastMatches";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consulta de Partidos de Dota 2</h1>
      </header>
      <main>
        <PastMatches />
      </main>
    </div>
  );
}

export default App;