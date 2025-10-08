import './App.css';
import MiLista from '../milista';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <h1>Hola mundo</h1>
      <h2>Este es mi primer componente React </h2>
      <div className='parrafo'>
        <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
      </div>
      
      <br/>
        <MiLista 
        titulo="personas" 
        nombre1="Juan" 
        nombre2="Paco" 
        nombre3="Martin"
        nombre4="Alba"/>

      <br/>
        <MiLista 
        titulo="personas2"
        nombre1="Conchi" 
        nombre2="Lukas"/>

      <br/>
        <MiLista 
        titulo="personas3"
        nombre1="Sonia"/>

      <Footer/>
    </div>
  );
}

export default App;
