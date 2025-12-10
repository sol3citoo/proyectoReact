//import React, {useState} from "react";

function MiLista (props){


    return(
    <table className="table table-striped table-hover table-info shadow-sm">
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Usuario</th>
            <th>Urgencia</th>
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Fecha Registro</th>
        </tr>
        

        <tbody>
            {props.incidencias.map((i) => (
                <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.titulo}</td>
                <td>{i.usuario.email}</td>
                <td>{i.nivel_urgencia}</td>
                <td>{i.ubicacion}</td>
                <td>{i.estado}</td>
                <td>{i.fecha_registro}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
  }

export default MiLista;