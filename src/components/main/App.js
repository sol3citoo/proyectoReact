import './App.css';
import MiLista from '../milista';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <h2>Mi aplicación</h2>
      <div id="parrafo">
        <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
      </div>
      <MiLista/>
      <Footer/>
    </>
  );
}

export default App;
