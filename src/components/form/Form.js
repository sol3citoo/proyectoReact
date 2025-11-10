import './Form.css'
import React, {useState} from "react";

function Form(props){

    const envioFormulario = (event)=>{
        event.preventDefault();
        const form = event.target;
        props.agregarIncidencia(
            form.titulo.value,
            form.usuario.value,
            form.descripcion.value,
            form.categoria.value,
            form.nivel.value,
            form.ubicacion.value
    )
}
/*class Form extends React.Component {
envioFormulario = (event)=>{
    event.preventDefault();
    const form = event.target;
    this.props.agregarIncidencia(
        form.titulo.value,
        form.usuario.value,
        form.descripcion.value,
        form.categoria.value,
        form.nivel.value,
        form.ubicacion.value
    )
}*/


        return (
            <div>
                <form onSubmit={envioFormulario}>
                    
                    {/* Título */}
                    <div className="elemento-form">
                        <label>Título</label>
                        <input type="text" name="titulo" placeholder="Problema general" required/><br></br>
                    </div>
                    {/* Usuario */}
                    <div className="elemento-form">
                        <label>Usuario</label>
                        <input type="text" name="usuario" placeholder="Introduce el id del usuario" required/><br></br>
                    </div>
                    {/* Descripción */}
                    <div className="elemento-form">
                        <label>Descripción</label>
                        <textarea name="descripcion" required/><br></br>
                    </div>
                    {/* Categoría */}
                    <div className="elemento-form">
                        <label>Categoría</label>
                            <select name="categoria" required>
                                <option value="">Seleccionar...</option>
                                <option>Hardware</option>
                                <option>Software</option>
                                <option>Red y conectividad</option>
                                <option>Usuarios y accesos</option>
                                <option>Infraestructura</option>
                            </select>
                    </div>
                    {/* Urgencia */}
                    <div className="elemento-form">
                        <label>Nivel de urgencia</label>
                            <select name="nivel" required>
                                <option value="">Seleccionar...</option>
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                    </div>
                    {/* Ubicación */}
                    <div className="elemento-form">
                        <label>Ubicación</label>
                        <input type="text" name="ubicacion" placeholder="Ubicación de la incidencia" required/>
                    </div>
                    {/* Botón */}
                    <button type="submit" className="elemento-form-button"> Registrar </button>
                </form>
            </div>
        )
    }

export default Form;