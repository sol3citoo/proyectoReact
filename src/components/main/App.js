import React,{useEffect, useState} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../IncidentList';
import Form from '../form/Form';
import Login from '../login/Login';
import Fondo from '../images/abstract-background-bokeh-circle-light-blue-abstract-blue-effect-background-light-blue-abstract-background-free-photo.jpg';


function App(){
  
  const incidencias_api_url = 'http://localhost:3004/incidencias';
  const usuario_api = 'http://localhost:3004/users';

  const [usuarios,setUsuarios] = useState([])
  const [incidencias, setIncidencia] = useState([])

  const [usuarioLogin, setUsuarioLogin] = useState(() => {
    const userSaved = localStorage.getItem('usuario');
    return userSaved ? JSON.parse(userSaved) : null;
  });

  const usuarioEstaLogueado = !!usuarioLogin;
  const esAdmin = usuarioLogin?.rol === 'admin';

  useEffect(() => {
    if (!usuarioEstaLogueado) return;

    const obtenerIncidencias = async () => {
      try {
        let response = await fetch(incidencias_api_url);
        if (!response.ok) throw new Error(`HTTP Error`);
        const data = await response.json()
        setIncidencia(data);
      }catch (e) {
        console.log("Error al cargar las incidencias: ", e);
      }
    }
    const obtenerUsuarios = async () => {
      try {
        let response = await fetch(usuario_api);
        if (!response.ok) throw new Error(`HTTP Error`);
        const data = await response.json()
        setUsuarios(data);
      }catch (e) {
        console.log("Error al cargar los usuarios: ", e);
      }
    }

    obtenerIncidencias();
    obtenerUsuarios();
  }, [usuarioEstaLogueado]);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuarioLogin(null);
  };
    
  const agregarIncidencia = async (nuevo_titulo, nuevo_email, nuevo_descripcion,
                      nuevo_categoria, nuevo_nivel_urgencia, nuevo_ubicacion)=>{
    try {
          let usuarioEncontrado = usuarios.find((u) => u.email === nuevo_email);

          const fecha = new Date(); 
          const year = fecha.getFullYear(); 
          const month = String(fecha.getMonth() + 1).padStart(2, '0');
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
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(nueva_incidencia)
              });

              if (!response.ok) throw new Error(`Fallo POST. Estado HTTP: ${response.status}`);
              let data = await response.json();
              setIncidencia([...incidencias, data]);
          } else {
            alert("Usuario no encontrado. Por favor, verifica el correo electrónico.");
            throw new Error("Error al crear incidencia. Usuario no encontrado");
          }
    }catch (e) {
      console.error("Falló la petición POST de la incidencia", e.message);
    }
  };

  const estiloFondo = {
    backgroundImage: `url(${Fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  if (!usuarioEstaLogueado) {
    return (
      <div className='card' style={estiloFondo}>
        <Header/>
        <div style={{flex: 1}}>
          <Login setUsuarioLogin={setUsuarioLogin} usuarioEstaLogueado={usuarioEstaLogueado}/>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='card' style={estiloFondo}>
      <Header/>
      <div style={{flex: 1}}>
        <h2 className="card-title mb-4 text-center">Bienvenido a la página de incidencias</h2>
        <div>
          <button>Ver incidencias</button>
          <button>Registrar incidencia</button>
          {esAdmin && <button>Gestión de usuarios/roles</button>}
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
        <div className="container-fluid mt-4 row">
          <main className="col-md-6">
            <p>Bienvenido a mi aplicación, esto fue creado con JavaScript en React</p>
            <MiLista incidencias={incidencias}/>
          </main>
          <aside className="col-md-6">
            <Form agregarIncidencia={agregarIncidencia}/>
          </aside>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
