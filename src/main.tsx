import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  CarrinhoContext,
  CarrinhoProvider,
} from "./hooks/adicionarCarrinho.tsx";
import { CarrinhoProps } from "./components/Carrinho.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <React.StrictMode>
      <CarrinhoProvider>
        <App />
      </CarrinhoProvider>
    </React.StrictMode>

);
