import Cabecalho from "componentes/cabecalho"
import Links from "componentes/Links"
import Rodape from "componentes/rodape"
import styles from "./PaginaDeErro.module.scss"
import erro from './erro-404.png';

export default function PaginaDeErro () {
    return (
        <>
            <Cabecalho />
                <section className={styles.PaginaDeErro}>
                    <img src={erro} className={styles.PaginaDeErro__mike}></img>
                    <h1>Ops, não encontramos essa pagina!</h1>
                </section>
            <Links />
            <Rodape />
        </>
    )
}