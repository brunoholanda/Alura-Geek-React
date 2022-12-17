import { Link } from "react-router-dom"
import styles from "./BotaoLogin.module.scss"

export default function BotaoLogin () {
    return (
        <section className={styles.BotaoLogin}>
            <Link to="/login"><button>Login</button></Link>
        </section>
    )
}