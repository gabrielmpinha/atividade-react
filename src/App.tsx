import { ListaProdutos } from "./components/ListaProdutos";
import { ListaProps } from "./components/ListaProdutos";
import { Header } from "./components/Header";
import { ButtonProps } from "./components/Button";
import { Carrinho, CarrinhoProps } from "./components/Carrinho";
import {
  CarrinhoContext,
  CarrinhoProvider,
  useCarrinhoContext,
} from "./hooks/adicionarCarrinho";
import { ProdCarrinhoProps } from "./components/ProdutoCarrinho";
function App() {
  const items: ListaProps = {
    items: [
      { nome: "Cartão PSN R$250", img: "link", valor: 10 },
      { nome: "Nome2", img: "link", valor: 120 },
      { nome: "Nome3", img: "link", valor: 89.9 },
      { nome: "Nome4", img: "link", valor: 220 },
      { nome: "Nome5", img: "link", valor: 323 },
      { nome: "Nome6", img: "link", valor: 24 },
      { nome: "Nome7", img: "link", valor: 220 },
      { nome: "Nome8", img: "link", valor: 13.98 },
      { nome: "Nome9", img: "link", valor: 134 },
      { nome: "Nome10", img: "link", valor: 115 },
    ],
  };
  const btnHome: ButtonProps = {
    text: "Home",
    onClick: () => "",
    className:
      "text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active",
  };
  const btn2: ButtonProps = {
    text: "Empresa",
    onClick: () => "",
    className:
      "text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active",
  };
  const btn3: ButtonProps = {
    text: "Contato",
    onClick: () => "",
    className:
      "text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active",
  };
  const btnCarrinho: ButtonProps = {
    text: "Carrinho",
    onClick: () => "",
    className: "",
  };
  //return <div><Header/></div>
  //return <div><Header titulo="CardStore" btnHome={btnHome} btn2={btn2} btn3={btn3} btnCarrinho={btnCarrinho} /><Carrinho produtos={[]} valorTotal={0}/></div>
  /*const vazio: CarrinhoProps = {
    produtos: [{nome:"sa", img:"ti", valor:3}],
    valorTotal: 0
  };*/
  /*const old = JSON.parse(JSON.stringify(localStorage.getItem("carrinho")));
  const novoCar: CarrinhoProps = {
    produtos: old ? [JSON.parse(old).produtos] : [],
    valorTotal: old ? JSON.parse(old).valorTotal : 0,
  };*/
  const { carrinho } = useCarrinhoContext();
  return (
    <div>
      <Header
        titulo="CardStore"
        btnHome={btnHome}
        btn2={btn2}
        btn3={btn3}
        btnCarrinho={btnCarrinho}
      />
      <ListaProdutos />
      <Carrinho produtos={carrinho.produtos} valorTotal={carrinho.valorTotal} />
    </div>
  );
}

export default App;
