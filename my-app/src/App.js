import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Antônio"

  return (
    <div className="App">
      <SayMyName nome='Matheus' />
      <SayMyName nome='Lucas' />
      <SayMyName nome={nome} />
      <Pessoa nome='Lucas' idade='20' profissao='Programador' foto='https://via.placeholder/150'/>
    </div>
  );
}

export default App;
