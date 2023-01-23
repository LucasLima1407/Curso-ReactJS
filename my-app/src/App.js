import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Lucas'
  const upperName = name.toUpperCase()
  function sub(a, b){
    return a - b
  }
  return (
    <div className="App">
      <HelloWorld />
      <h2>Alterando usando JSX</h2>
      <h3>Olá, {name}</h3>
      <h3>Olá, {upperName}</h3>
      <h3>Subtração: {sub(9,3)}</h3>
    </div>
  );
}

export default App;
