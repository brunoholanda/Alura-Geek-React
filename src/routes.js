import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "paginas/Login";
import PaginaInicial from "paginas/PaginaInicial";
import AllProducts from "paginas/AllProducts";
import AdicionarProduto from "paginas/AdicionarProduto";
import Cadastro from "paginas/Cadastro";
import PaginaDeErro from "paginas/PaginaDeErro";

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todos-os-produtos" element={<AllProducts/>} />
            <Route path="/adicionar-produto" element={<AdicionarProduto />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<PaginaDeErro />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Rotas;