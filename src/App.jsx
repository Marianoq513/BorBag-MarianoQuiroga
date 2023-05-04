import './App.css';
import ContenedorProductos from './componets/ContenedorProductos/ContenedorProductos';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos a BorBag'/>
    <ContenedorProductos/>
    </>
  );
}

export default App;
