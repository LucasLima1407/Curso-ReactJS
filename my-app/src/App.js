import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Antônio"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome='Matheus' />
      <SayMyName nome='Lucas' />
      <SayMyName nome={nome} />
      <Pessoa nome='Lucas' idade='20' profissao='Programador' foto='https://via.placeholder/150'/>
      <List  />
    </div>
  );
}

export default App;
