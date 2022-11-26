import InputCorreo from "./InputCorreo"
import InputDireccion from "./InputDireccion"
import InputEdad from "./InputEdad"
import InputNombre from "./InputNombre"
import InputUniversidad from "./InputUniversidad"

const Form = () => {
    return(
        <form action="" id="form">
            <p>Datos de Beneficiarios</p>
            <InputNombre />
            <InputDireccion />
            <InputUniversidad />
            <InputEdad />
            <InputCorreo />
            <img id="img_form" src="../../src/img-form.jpg" alt="" />
        </form>
    )
}

export default Form