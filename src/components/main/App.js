import React,{useState} from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista';
import Form from '../form/Form';

function App(){
  const [incidencias, setIncidencia] = useState([
    {
            id_incidencia: 1,
            id_usuario: 'e768590345h',
            titulo: "Proyector averiado en aula 2",
            descripcion: "El proyector no enciende y la lámpara parece dañada.",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-03",
            estado: "Abierta",
            ubicacion: "A301"
        },
        {
            id_incidencia: 2,
            id_usuario: 'e235439802s',
            titulo: "Ordenador de secretaría no enciende",
            descripcion: "El equipo no responde al precionar el botón encendido.",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-02",
            estado: "En proceso",
            ubicacion: "B205"
        },
        {
            id_incidencia: 3,
            id_usuario: 'e765849381b',
            titulo: "Impresora sin conexión",
            descripcion: "La impresora de la sala de profesores no aparece en red.",
            categoria: "Red/Impresión",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-01",
            estado: "Resuelta",
            ubicacion: "Sala de profesores"
        }
  ]
)



/*class App extends React.Component {
  state={incidencias:[ 
        {
            id_incidencia: 1,
            id_usuario: 'e768590345h',
            titulo: "Proyector averiado en aula 2",
            descripcion: "El proyector no enciende y la lámpara parece dañada.",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-03",
            estado: "Abierta",
            ubicacion: "A301"
        },
        {
            id_incidencia: 2,
            id_usuario: 'e235439802s',
            titulo: "Ordenador de secretaría no enciende",
            descripcion: "El equipo no responde al precionar el botón encendido.",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-02",
            estado: "En proceso",
            ubicacion: "B205"
        },
        {
            id_incidencia: 3,
            id_usuario: 'e765849381b',
            titulo: "Impresora sin conexión",
            descripcion: "La impresora de la sala de profesores no aparece en red.",
            categoria: "Red/Impresión",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-01",
            estado: "Resuelta",
            ubicacion: "Sala de profesores"
        }
    ]
    }
*/

    
    const agregarIncidencia =(nuevo_usuario, nuevo_titulo, nuevo_descripcion,
                        nuevo_categoria, nuevo_nivel_urgencia, nuevo_ubicacion)=>{
            const fecha = new Date(); 
            const year = fecha.getFullYear(); 
            const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11 
            const day = String(fecha.getDate()).padStart(2, '0'); 
            const fechaFormateada = year+"-"+month+"-"+day; 
            const nueva_incidencia = {
            id_incidencia: incidencias.length+1,
            id_usuario: nuevo_usuario,
            titulo: nuevo_titulo,
            descripcion: nuevo_descripcion,
            categoria: nuevo_categoria,
            nivel_urgencia: nuevo_nivel_urgencia,
            fecha_registro: fechaFormateada,
            estado: "Abierta",
            ubicacion: nuevo_ubicacion
        }
        setIncidencia([...incidencias, nueva_incidencia]);
        console.log("Datos recibidos: ", nueva_incidencia);
     }


  return (
    <>
      <Header/>
      <h2>Mi aplicación</h2>
      <div className='contenedor-incidencias'>
        <main>
        <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
        <MiLista incidencias={incidencias}/>
        </main>
        <aside>
        <Form agregarIncidencia={agregarIncidencia}/>
        </aside>
      </div>
      <br/>
      <Footer/>
    </>
  );
};


export default App;

