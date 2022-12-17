import React from "react";
import styles from "./Produtos.module.scss";
import starwars from "./StarWars/starwars.json";
import StarWars from "./StarWars";
import consoles from "./Consoles/consoles.json";
import Consoles from "./Consoles";
import diversos from "./Diversos/diversos.json";
import Diversos from "./Diversos";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Produtos () {
  const [itens01, setItens01] = useState(starwars);
  const [itens02, setItens02] = useState(consoles);
  const [itens03, setItens03] = useState(diversos);
  return (
    <section className={styles.produtos}>
          <div className={styles.produtos__titulo}>
            <h2>Star Wars</h2>
            <Link to="/todos-os-produtos">Ver Tudo</Link>
          </div>
       <StarWars itens01={itens01} styles={styles} />
          <div className={styles.produtos__titulo}>
            <h2>Consoles</h2>
            <Link to="/todos-os-produtos">Ver Tudo</Link>
          </div>
        <Consoles itens02={itens02} styles={styles} />
          <div className={styles.produtos__titulo}>
            <h2>Diversos</h2>
            <Link to="/todos-os-produtos">Ver Tudo</Link>
          </div>
        <Diversos itens03={itens03} styles={styles} />
    </section>
  );
}


    