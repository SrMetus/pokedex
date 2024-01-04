import './App.css';
import injectContext from "./store/appContext";
import { CardPokemon } from './componets/Card';
import { NavBar } from './componets/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <CardPokemon />
      
    </>
  );
}

export default injectContext(App);
