import { Carrinho } from "../components/Carrinho";
import { useCarrinhoContext } from "../hooks/adicionarCarrinho";

export default function PaginaCarrinho() {
  const { carrinho } = useCarrinhoContext();
  return (
    <div>
      <Carrinho produtos={carrinho.produtos} valorTotal={carrinho.valorTotal} />
    </div>
  );
}
