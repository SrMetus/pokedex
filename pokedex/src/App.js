import './App.css';
import injectContext from "./store/appContext";
import { CardPokemon } from './componets/Card';

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <CardPokemon />
      
    </>
  );
}

export default injectContext(App);
