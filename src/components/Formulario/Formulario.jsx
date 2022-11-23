import { Titulo } from "../Titulo/Titulo"

export
function Formulario(){
    let subtitulo = 'subtitulo de Formulario'
    return(
    <div>
        <Titulo titulo='Titulo de Form' subTitulo={subtitulo}/>
        <form>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" /><p></p>
            <button type="submit">Enviar</button>
        </form>
    </div>    
    )
  }