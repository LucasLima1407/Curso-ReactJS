import './App.css';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
function App() {
  const meusItens = ['Camaro', 'Gol', 'Toro']
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
