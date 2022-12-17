import React from "react";

export default function Consoles ({itens02, styles}) {
  return (
    <ul className={styles.produtos__cards}>
      {itens02.map((item) => {
        return (
          <li key={item.id} className={styles.produtos__card}>
            <img
              className={styles.produtos__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.produtos__descricao}>{item.titulo}</p>
            <div>
              <p className={styles.produtos__preco}>{item.preco}</p>
              <a className={styles.produtos__link} href={item.link}>Ver Produto</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}