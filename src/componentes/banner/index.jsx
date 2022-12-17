import banner from "./banner.png";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";

export default function Banner () {
    return (
        <section className={styles.principal}>
            <div className={styles.principal__imagem}>
                <img src={banner} alt="Banner da AluraGeek" />
                <h1>Dezembro Promocional</h1>
                <h3>Produtos selecionados com 33% de desconto</h3>
                <Link to="*"><button className="botaoprincipal">Ver Consoles</button></Link> 
            </div>
        </section>

    )
}