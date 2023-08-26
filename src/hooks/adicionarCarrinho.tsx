import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProdutoProps } from "../components/Produto";
import { ProdCarrinhoProps } from "../components/ProdutoCarrinho";
import { CarrinhoProps } from "../components/Carrinho";
import { useNavigate } from "react-router-dom";

interface CarrinhoContext {
  carrinho: CarrinhoProps;
  addCarrinho: (novoProduto: ProdutoProps) => void;
  removerCarrinho: (novoProduto: ProdutoProps) => void;
  noCarrinho: (item: string) => boolean;
  finalizarCompra: () => void;
}

const vazio: CarrinhoProps = {
  produtos: [],
  valorTotal: 0,
};
export const CarrinhoContext = createContext<CarrinhoContext>({
  carrinho: vazio,
  addCarrinho: (_) => {},
  removerCarrinho: (_) => {},
  noCarrinho: (_) => {
    return false;
  },
  finalizarCompra() {}
  
});

const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<CarrinhoProps>({} as CarrinhoProps);
  const navigate = useNavigate()

  useEffect(() => {
    const old = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("carrinho")))
    );
    setCarrinho(old ? old : {});
  }, []);

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
      produtos: old ? [...JSON.parse(old).produtos, produto] : [produto],
      valorTotal: old
        ? Number((JSON.parse(old).valorTotal + produto.valor).toFixed(2))
        : produto.valor,
    };
    localStorage.setItem("carrinho", JSON.stringify(novoCar));
    setCarrinho(novoCar);
  };

  const removerCarrinho = (novoProduto: ProdutoProps) => {
    const produto: ProdCarrinhoProps = {
      nome: novoProduto.nome,
      img: novoProduto.img,
      valor: novoProduto.valor,
    };
    const old = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("carrinho")))
    );
    const novoCar: CarrinhoProps = {
      produtos: old
        ? old.produtos.filter((e: ProdCarrinhoProps) => {
            return e.nome !== produto.nome;
          })
        : [],
      valorTotal: old ? Number((old.valorTotal - produto.valor).toFixed(2)) : 0,
    };
    console.log(
      old.produtos.filter((e: ProdCarrinhoProps) => {
        return e.nome !== produto.nome;
      })
    );
    localStorage.setItem("carrinho", JSON.stringify(novoCar));
    setCarrinho(novoCar);
  };

  const noCarrinho = (produto: string): boolean => {
    const old = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("carrinho")))
    );
    if (old) {
      if (
        old.produtos.filter((e: ProdCarrinhoProps) => e.nome === produto)
          .length > 0
      ) {
        return true;
      }
    }
    return false;
  };

  const finalizarCompra = () =>{
    const old = JSON.parse(
      JSON.parse(JSON.stringify(localStorage.getItem("carrinho")))
    );
    if(old){
      old.produtos.map((item:ProdutoProps)=>(removerCarrinho(item)))
      if(carrinho.produtos.length>0)
        navigate('/finalizarcompra')
    }
    
  }

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, addCarrinho, removerCarrinho, noCarrinho, finalizarCompra }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
export { CarrinhoProvider };

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext);
};
