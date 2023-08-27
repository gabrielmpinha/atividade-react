import { Button } from "./Button";
import { useCarrinhoContext } from "../hooks/adicionarCarrinho";

export interface ProdutoProps {
  img: string;
  nome: string;
  valor: number;
}

export const Produto: React.FC<ProdutoProps> = ({ img, nome, valor }) => {
  const produto = {
    nome: nome,
    img: img,
    valor: Number(Number(valor).toFixed(2)),
  };
  const { addCarrinho, noCarrinho } = useCarrinhoContext();

  const click = () => {
    addCarrinho(produto);
  };

  return (
    <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
      <img
        className="p-8 "
        src={`src/assets/${img}.jpg`}
        alt="Imagem do produto"
      ></img>
      <div className="box px-5 pb-5">
        <h1 className="text-white text-xl font-semibold tracking-wide px-7 pb-3">
          {nome}
        </h1>
        <div className="flex items-center justify-between pr-10 pb-4">
          <h2 className="text-blue-500 text-2xl font-sans font-semibold tracking-tight px-3">
            R${Number(valor).toFixed(2)}
          </h2>

          <Button
            text="Adicionar ao Carrinho"
            onClick={click}
            disabled={noCarrinho(nome)}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-600 text-white font-bold rounded py-3 px-5 text-center"
          />
        </div>
      </div>
    </div>
  );
};
