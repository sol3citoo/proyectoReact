import React,{useEffect, useState} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../IncidentList';
import Form from '../form/Form';
import Fondo from '../images/abstract-background-bokeh-circle-light-blue-abstract-blue-effect-background-light-blue-abstract-background-free-photo.jpg';


function App(){
  
  const incidencias_api_url = 'http://localhost:3004/incidencias';
  const usuario_api = 'http://localhost:3004/users';

  const [usuarios,setUsuarios] = useState([])
  const [incidencias, setIncidencia] = useState([ ])
  
  useEffect(() => {
    const obtenerIncidencias = async () => {
      try {
        let response = await fetch(incidencias_api_url);
        if (!response.ok) {
          throw new Error(`HTTP Error`);
        }
        const data = await response.json()
        console.log(data);
        setIncidencia(data);
      }catch (e) {
        console.log("Error al cargar las incidencias: ", e);
      }
    }
    const obtenerUsuarios = async () => {
      try {
        let response = await fetch(usuario_api);
        if (!response.ok) {
          throw new Error(`HTTP Error`);
        }
        const data = await response.json()
        console.log(data);
        setUsuarios(data);
      }catch (e) {
        console.log("Error al cargar los usuarios: ", e);
      }
    }

    obtenerIncidencias();
    obtenerUsuarios();
  }, []);
    
    const agregarIncidencia = async ( nuevo_titulo, nuevo_email, nuevo_descripcion,
                        nuevo_categoria, nuevo_nivel_urgencia, nuevo_ubicacion)=>{
      try {
            let usuarioEncontrado = usuarios.find((u) => u.email === nuevo_email);

            const fecha = new Date(); 
            const year = fecha.getFullYear(); 
            const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11 
            const day = String(fecha.getDate()).padStart(2, '0'); 
            const fechaFormateada = year+"-"+month+"-"+day; 

            
            if (usuarioEncontrado) {
                const nueva_incidencia = {
                    usuario: usuarioEncontrado,
                    titulo: nuevo_titulo,
                    descripcion: nuevo_descripcion,
                    categoria: nuevo_categoria,
                    nivel_urgencia: nuevo_nivel_urgencia,
                    fecha_registro: fechaFormateada,
                    ubicacion: nuevo_ubicacion,
                    estado: "Abierta",
                    comentarios: []
                }
                let response = await fetch(incidencias_api_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nueva_incidencia)
                });

                if (!response.ok) {
                    throw new Error(`Fallo de la petición POST. Estado HTTP: ${response.status}`);
                }
                let data = await response.json();
                console.log("Nueva incidencia:", data);
                setIncidencia([...incidencias, data]);
        console.log("Datos recibidos: ", nueva_incidencia);
            } else {
              alert("Usuario no encontrado. Por favor, verifica el correo electrónico.");
              throw new Error("Error al crear incidencia. Usuario no encontrado");
            }
            }catch (e) {
              console.error("Falló la petición POST de la incidencia", e.message);
            }
          };
        
        
     


  return (
    <div className='card' style={{backgroundImage: `url(${Fondo})`, backgroundSize: "cover",
    backgroundRepeat:"no-repeat"}}>
      <Header/>
      <h2 className=" card-title mb-4 text-center">Mi aplicación</h2>
      <div className="container-fluid mt-4 row">
        <main className="col-md-6">
        <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
        <MiLista incidencias={incidencias}/>
        </main>
        <aside className="col-md-6">
        <Form agregarIncidencia={agregarIncidencia}/>
        </aside>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

