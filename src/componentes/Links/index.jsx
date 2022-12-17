import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.scss";
import logo from './Logo.png'

export default function Links () {
  return (
    <section className={styles.Links}>
        <div className={styles.Links__imagem}>
          <img src={logo} alt="Logo da alurageek" />
        </div>
        <div className={styles.Links__link}>        
            <Link to="/">Quem somos nós</Link>
            <Link to="/">Política de privacidade</Link>
            <Link to="/">Programa fidelidade</Link>
            <Link to="/">Nossas lojas</Link>
            <Link to="/">Quero ser franqueado</Link>
            <Link to="/">Anuncie aqui</Link>
        </div>
        <div className={styles.Links__formulario}>
          <h2>Fale Conosco</h2>
          <input className={styles.Links__nome} type="name" placeholder="Insira seu Nome"/>
          <input className={styles.Links__texto} type="text" placeholder="Escreva sua mensagem"/>
          <button className="botaoprincipal">Enviar Mensagem</button>
        </div>
    </section>
  )
}
