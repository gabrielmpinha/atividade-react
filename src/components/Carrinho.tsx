import { useCarrinhoContext } from "../hooks/adicionarCarrinho";
import { Button } from "./Button";
import { ButtonProps } from "./Button";
import { ProdCarrinhoProps, ProdutoCarrinho } from "./ProdutoCarrinho";

export interface CarrinhoProps {
  produtos: ProdCarrinhoProps[];
  valorTotal: number;
  btnComprar?: ButtonProps;
}

export const Carrinho: React.FC<CarrinhoProps> = ({ produtos, valorTotal }) => {
  const { finalizarCompra } = useCarrinhoContext();

  return (

    <div className="carrinho">
      <div className="prodCarrinho">
        {produtos?.map((item) => (
          <ProdutoCarrinho
            nome={item.nome}
            img={item.img}
            valor={item.valor}
            key={item.nome}
          />
        ))}
      </div>
      <div className="compra w-1/5 h-auto bg-blue-600 rounded-md grid text-center">
        <h2 className="text-white font-bold">
          R${typeof valorTotal === "number" ? Number(valorTotal).toFixed(2) : 0}
        </h2>
        <Button text="Comprar" onClick={finalizarCompra} className="bg-green-700 hover:bg-green-950 text-white rounded text-center" />
      </div>
    </div>
  );
};
