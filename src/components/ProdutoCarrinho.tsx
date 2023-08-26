import { useCarrinhoContext } from "../hooks/adicionarCarrinho";
import { Button } from "./Button";
export interface ProdCarrinhoProps {
  nome: string;
  img: string;
  valor: number;

  //btnRemover: ButtonProps
}

export const ProdutoCarrinho: React.FC<ProdCarrinhoProps> = ({
  nome,
  img,
  valor /*, btnRemover*/,
}) => {
  const produto = {
    nome: nome,
    img: img,
    valor: Number(Number(valor).toFixed(2)),
  };
  const { removerCarrinho } = useCarrinhoContext();

  return (
    <div className="flex max-w-xs border rounded-lg shadow bg-gray-800 border-gray-700">
      <img
        src={`src/assets/${img}.jpg`}
        alt="Imagem do produto"
        className="max-w-1/2"
      ></img>
      <div className="max-w-full ml-2">
        <div className="text-white">
            <h1>{nome}</h1>
            <h2>R${Number(valor).toFixed(2)}</h2>
        </div>
        <Button
          text="Remover"
          onClick={() => {
            removerCarrinho(produto);
          }}
          className="bg-red-600 rounded-md"
        />
      </div>
    </div>
  );
};
