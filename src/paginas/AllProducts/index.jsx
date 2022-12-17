import Cabecalho from "componentes/cabecalho";
import Links from "componentes/Links";
import Consoles from "componentes/produtos/Consoles";
import StarWars from "componentes/produtos/StarWars";
import Rodape from "componentes/rodape";
import styles from "./AllProducts.module.scss";
import { useState } from "react";
import Diversos from "componentes/produtos/Diversos";
import starwars from "../../componentes/produtos/StarWars/starwars.json";
import consoles from "../../componentes/produtos/Consoles/consoles.json";
import diversos from "../../componentes/produtos/Diversos/diversos.json";
import { Link } from "react-router-dom";

export default function AllProducts () {
    
    const [itens01, setItens01] = useState(starwars);
    const [itens02, setItens02] = useState(consoles);
    const [itens03, setItens03] = useState(diversos);
    
    return (
        <>
        <section>
            <Cabecalho />
            <div className={styles.produtos__sessao}>
                <div className={styles.produtos__titulo}>
                    <h2>Todos os produtos</h2>
                    <Link to="/adicionar-produto"><button className="botaoprincipal">Adicionar Produto</button></Link>
                </div>
                <StarWars itens01={itens01} styles={styles} />
                <Consoles itens02={itens02} styles={styles} />
                <Diversos itens03={itens03} styles={styles} />
            </div>
            <Links />
            <Rodape />
        </section>
        </>
    )
}