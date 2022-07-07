import './App.css';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer'
function App() {
  return(
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Bienvenido a la mejor pagina para comprar zapatillas"/>
    </div>
  );
}

export default App;
