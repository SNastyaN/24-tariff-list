
import './App.css';
import Tariffcard from './components/Tariffcards/Tariffcards';
import tariffs from './components/data/tariff.json'

function App() {
  return (
    <div className="App">
      <Tariffcard arr = {tariffs} />
    </div>
  );
}

export default App;
