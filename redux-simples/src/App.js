 import './App.css';
import Linha from './components/Linha';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';



function App() {
  return (
    <>
      <div className="App">
        <h1>Exercício Reactdfgdfgdf-Redux</h1>
      <Linha>
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>
      </Linha>
        <Linha>
          <Intervalo />
        </Linha>
      </div>
    </>
  );
}

export default App;
