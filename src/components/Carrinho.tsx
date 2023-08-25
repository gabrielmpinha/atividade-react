import { useEffect } from "react";
import { CarrinhoContext, CarrinhoProvider, useCarrinhoContext } from "../hooks/adicionarCarrinho";
import { Button } from "./Button";
import { ButtonProps } from "./Button";
import { ProdCarrinhoProps, ProdutoCarrinho } from "./ProdutoCarrinho";


export interface CarrinhoProps {
  produtos: ProdCarrinhoProps[];
  valorTotal: number;
  btnComprar?: ButtonProps;
}

export const Carrinho: React.FC<CarrinhoProps> = ({ produtos, valorTotal }) => {
    //const {valorTotal:valorTotal2} = useCarrinhoContext();
    
    //console.log(carrinho.valorTotal)
    

    return (
    
    //<Context.Provider value={{produtos}}>
    //<CarrinhoContext.Provider value={{...produtos}}>
    <div>
      <div className="flex">
        {(produtos)?.map((item) => (
          <ProdutoCarrinho
            nome={item.nome}
            img={item.img}
            valor={valorTotal}
            key={item.nome}
          />
          
        ))}
      </div>
      <h2>{valorTotal}</h2>
      <Button text="Comprar" onClick={() => {}} className="" />
    </div>
    //</CarrinhoContext.Provider>
  );
};
