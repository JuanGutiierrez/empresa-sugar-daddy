import ImgCentral from "../helpers/ImgCentral"
import Parrafo from "../helpers/Parrafo"
import Article from "./Article"
import ArticlePresupuesto from "./ArticlePresupuesto"
import Section from "./Section"

const Main = () => {
    return(
        <main id="contMain">
            <Parrafo />
            <section  id="contSect">
                <Section />
                <ImgCentral />
                <Article />
            </section>
            <ArticlePresupuesto />
        </main>
    )
}

export default Main