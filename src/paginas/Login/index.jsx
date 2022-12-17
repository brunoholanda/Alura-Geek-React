import Cabecalho from "componentes/cabecalho";
import Links from "componentes/Links";
import Rodape from "componentes/rodape";
import { Link } from "react-router-dom";

import styles from "./Login.module.scss";

export default function Login () {
    return (
        <>
            <Cabecalho />
            <section className={styles.login}>
                <h2>Iniciar Sessao</h2>
                <input type="email" placeholder="Escreva seu email"/>
                <input type="password" placeholder="Escreva sua senha"/>
                <Link to="/"><button>Entrar</button></Link>
                <Link to="/cadastro"><button>Fazer Cadastro</button></Link>
            </section>
            <Links />
            <Rodape />
        </>
    )
}
