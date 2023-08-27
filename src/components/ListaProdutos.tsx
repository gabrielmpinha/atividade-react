import { Produto } from "./Produto";
import produtos from "../data/produtos.json";
export const ListaProdutos: React.FC = () => {
  return (
    <div className="listaProd">
      {JSON.parse(JSON.stringify(produtos)).map((item: any) => (
        <Produto
          nome={item.nome}
          img={item.img}
          valor={item.valor}
          key={item.nome}
        />
      ))}
    </div>
  );
};
