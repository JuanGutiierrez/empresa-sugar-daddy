import ImgCentral from "../helpers/ImgCentral"
import Article from "./Article"
import ArticlePresupuesto from "./ArticlePresupuesto"
import Section from "./Section"

const Main = () => {
    return(
        <main id="contMain">
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