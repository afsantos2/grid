import Produtos from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
      <ul className="produtos-lista">
        <Produtos />
      </ul>
      </main>
    </div>
  );
}

export default App;
