import Parrafo from "../helpers/Parrafo"

const ArticlePresupuesto = () => {
    return(
    <article id="article_presupuesto">
        <p>Control de Gastos</p>
        <input id="inputs" class="form-control" type="text" placeholder="Valor Presupuesto" aria-label=".form-control-lg example"/>
        <input id="inputs" class="form-control" type="text" placeholder="¿Por que razon se quizo ayudar a este beneficiario?" aria-label="default input example"/> 
        {/* <Parrafo /> */}
    </article>
    )
}

export default ArticlePresupuesto