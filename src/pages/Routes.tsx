import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaginaCarrinho from "./PaginaCarrinho";
import FinalizarCompra from "./FinalizarCompra";
export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/carrinho" element={<PaginaCarrinho/>}/>
            <Route path ="/finalizarcompra" element={<FinalizarCompra/>}></Route>
        </Routes>
    );

}