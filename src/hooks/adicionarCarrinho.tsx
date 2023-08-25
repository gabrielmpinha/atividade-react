import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProdutoProps } from "../components/Produto";
import { ProdCarrinhoProps } from "../components/ProdutoCarrinho";
import React from "react";
import { CarrinhoProps } from "../components/Carrinho";
//import carrinho from "../data/carrinho.json";
/*
export type Contexto = {
    carrinho: ProdCarrinhoProps[];
    setCarrinho:(prod:ProdutoProps) =>void 
}*/

interface CarrinhoContext {
    carrinho : CarrinhoProps;
    addCarrinho: (novoProduto: ProdutoProps) => void;
};

const vazio: CarrinhoProps = {
  produtos: [],
  valorTotal: 0,
};
export const CarrinhoContext = createContext<CarrinhoContext>({carrinho:vazio, addCarrinho:(_)=>{}});

const CarrinhoProvider = ({ children }: {children: ReactNode}) => {
  const [carrinho, setCarrinho] = useState<CarrinhoProps>({} as CarrinhoProps);

  useEffect(() => {
    console.log(carrinho);
    
  }, [carrinho]);

  const addCarrinho = (novoProduto: ProdutoProps) => {
    const produto: ProdCarrinhoProps = {
      nome: novoProduto.nome,
      img: novoProduto.img,
      valor: novoProduto.valor,
    };

    const old = JSON.parse(JSON.stringify(localStorage.getItem("carrinho")));
    const novoCar: CarrinhoProps = {
      produtos: old ? [...JSON.parse(old).produtos, produto] : [],
      valorTotal: old ? JSON.parse(old).valorTotal + produto.valor : 0,
    };
    localStorage.setItem("carrinho", JSON.stringify(novoCar));
    setCarrinho(novoCar);
  };


  /*
  useEffect(() => {(async()=>
    const old = await JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("carrinho")))
    );
    setCarrinho(old);
  }, []);*/

  // console.log(carrinho);
  /*return <>{
    <CarrinhoContext.Provider value={{ ...carrinho, ...addCarrinho }}>
      <>{children}</>
    </CarrinhoContext.Provider>
}</>;*/
return <CarrinhoContext.Provider value={{carrinho,addCarrinho}}>{children}</CarrinhoContext.Provider>;

};
//return { carrinho, addCarrinho };
export { CarrinhoProvider };

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext);
};

/*
export const adicionarCarrinho = () => {
    const [novosProdutos, setNovosProdutos] = useState({});

  const addCarrinho = (novoProduto: ProdutoProps) => {
    const novoProd = {
      nome: novoProduto.nome,
      img: novoProduto.img,
      valor: novoProduto.valor,
    };

    setNovosProdutos({
      ...novosProdutos,
      novoProd,
    });
    
    //carrinho.push((novoProd))
    localStorage.setItem(carrinho, novoProd);
    };
  

  console.log(carrinho);
  return { novosProdutos, addCarrinho };
};
*/
