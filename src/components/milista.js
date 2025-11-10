import React, {useState} from "react";

function MiLista (props){


    return(
    <>
        <ul>
            {props.incidencias.map((i) => (
                <li key={i.id_incidencia}>
                <dt><strong>ID: </strong>{i.id_incidencia}, </dt>
                <dt><strong>Título: </strong>{i.titulo}, </dt>
                <dd><strong>Descripción: </strong>{i.descripcion}, </dd>
                <dd><strong>Usuario: </strong>{i.id_usuario}, </dd>
                <dd><strong>Urgencia: </strong>{i.nivel_urgencia}, </dd>
                <dd><strong>Ubicación: </strong>{i.ubicacion} </dd>
                </li>
            ))}
        </ul>
    </>
    );
  }

export default MiLista;