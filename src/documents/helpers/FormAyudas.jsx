import InputCantidad from "./InputCantidad"
import InputDescripcion from "./InputDescripcion"
import InputNombreProducto from "./InputNombreProducto"
import InputTienda from "./InputTIenda"
import InputValor from "./InputValor"

const FormAyudas = () => {
    return(
        <form action="" id="form">
            <p>Gastos de las Ayudas</p>
            <InputNombreProducto />
            <InputDescripcion />
            <InputTienda />
            <InputCantidad />
            <InputValor />
            <img src="../../src/img-central.png" alt="" />
        </form>
    )
}

export default FormAyudas