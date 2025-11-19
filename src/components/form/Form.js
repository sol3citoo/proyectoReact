//import React, {useState} from "react";


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
            <div className="card p-4">
                <h2 className="card-title mb-4 text-center">Registrar incidencia</h2>
                <form onSubmit={envioFormulario} >

                    {/* Título */}
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingtitulo" type="text" name="titulo" placeholder="Problema general" required/>
                        <label for="floatingInput">Título</label>
                    </div>
                    {/* Usuario */}
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingusuario" type="text" name="usuario" placeholder="Introduce el id del usuario" required/><br></br>
                        <label for="floatingInput">Usuario</label>
                    </div>
                    {/* Descripción */}
                    <div class="form-floating mb-3">
                        <textarea className="mb-0 form-control" name="descripcion" required/><br></br>
                        <label for="floatingInput">Descripción</label>
                    </div>
                    {/* Categoría */}
                    <div class="form-floating mb-3">
                            <select class="form-control" id="floatingusuario" name="categoria" required>
                                <option value="">Seleccionar...</option>
                                <option>Hardware</option>
                                <option>Software</option>
                                <option>Red y conectividad</option>
                                <option>Usuarios y accesos</option>
                                <option>Infraestructura</option>
                            </select>
                        <label for="floatingInput">Categoría</label>
                    </div>
                    {/* Urgencia */}
                    <div class="form-floating mb-3">
                            <select class="form-control" id="floatingusuario" name="nivel" required>
                                <option value="">Seleccionar...</option>
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                        <label for="floatingInput">Nivel de urgencia</label>
                    </div>
                    {/* Ubicación */}
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingusuario" type="text" name="ubicacion" placeholder="Ubicación de la incidencia" required/>
                        <label for="floatingInput">Ubicación</label>
                    </div>
                    {/* Botón */}
                    <button type="submit" className="btn btn-outline-info mx-auto d-grid"> Registrar </button>
                </form>
            </div>
        )
    }

export default Form;