import Banner from "componentes/banner";
import Cabecalho from "componentes/cabecalho";
import Links from "componentes/Links";
import Produtos from "componentes/produtos";
import Rodape from "componentes/rodape";

export default function PaginaInicial () {
    return (
        <>
            <Cabecalho />
            <Banner />
            <Produtos />
            <Links />
            <Rodape />    
        </>
        
    );
}