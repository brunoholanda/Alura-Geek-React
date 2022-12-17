import logo from './Logo.png'
import styles from './Cabecalho.module.scss'
import { Link } from 'react-router-dom'
import BotaoLogin from 'componentes/BotaoLogin'


export default function Cabecalho () {
    return (
      <header className={styles.cabecalho}>
          <div className={styles.cabecalho__container}>
          <Link to="/"><img src={logo} className={styles.cabecalho__logo} alt="logo da alurageek" /></Link>
            <input className={styles.cabecalho__input} type="text" placeholder="O que deseja encontrar?" />
            <div className={styles.cabecalho__BotaoLogin}>
              <BotaoLogin />
            </div>
          </div>
      </header>
    )
}