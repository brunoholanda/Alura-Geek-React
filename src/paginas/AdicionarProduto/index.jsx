import BotaoMenuAdm from "componentes/BotaoMenuAdm";
import Cabecalho from "componentes/cabecalho";
import Links from "componentes/Links";
import Rodape from "componentes/rodape";
import { Link } from "react-router-dom";
import styles from "./AdicionarProduto.module.scss"


export default function AdicionarProduto () {
    return (
        <>
        <section className={styles.BotaoAdProdutos}>
            <Cabecalho />
            <BotaoMenuAdm />
        </section>
                <section className={styles.AdicionarProduto}>
                           
                        <h1>Adicionar novo produto</h1>
                        <input type="url" placeholder="URL da imagem"></input>
                        <input type="text" placeholder="Categoria"></input>
                        <input type="name" placeholder="Nome do produto"></input>
                        <input type="text" placeholder="Preco do produto"></input>
                        <input type="text" placeholder="Descricao do produto"></input>
                        <Link to="/"><button className="botaoprincipal">Adicionar Produto</button></Link>
                    
                </section>
            <Links />
            <Rodape />
        </>
    )
}