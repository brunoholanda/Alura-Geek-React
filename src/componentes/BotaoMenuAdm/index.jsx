import { Link } from "react-router-dom"
import styles from "./BotaoMenuAdm.module.scss"

export default function BotaoMenuAdm () {
    return (
        <section className={styles.BotaoMenuAdm}>
            <Link to="/"><button>Menu adminitrador</button></Link>
        </section>
    )
}