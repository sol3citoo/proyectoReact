import milista from './milista.js';
import React from "react";

class MiLista extends React.Component{
    state = {incidencias : [ 
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
        },
        {
            id_incidencia: 4,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: ""
        },
        {
            id_incidencia: 5,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: ""
        },
        {
            id_incidencia: 6,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: ""
        },
        {
            id_incidencia: 7,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: "" 
        },
        {
            id_incidencia: 8,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: "" 
        },
        {
            id_incidencia: 9,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: "" 
        },
        {
            id_incidencia: 10,
            id_usuario: '',
            titulo: "",
            descripcion: "",
            categoria: "",
            nivel_urgencia: "",
            fecha_registro: "",
            estado: "",
            ubicacion: "" 
        }

    ]};

    render(){
        return(
    <>
        <ul>
            {this.state.incidencias.map((i) => (
                <li key={i.id_incidencia}><strong>Título: </strong>{i.titulo}, <br></br>
                <strong>Descripción: </strong>{i.descripcion}, <br></br>
                <strong>Usuario: </strong>{i.id_usuario}, <br></br>
                <strong>Urgencia: </strong>{i.nivel_urgencia}, <br></br>
                <strong>Ubicación: </strong>{i.ubicacion}<br></br>
                </li>
            ))}
        </ul>
    </>
    );
  }
}
export default MiLista;