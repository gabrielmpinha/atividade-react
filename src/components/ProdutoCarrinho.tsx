import { ButtonProps } from "./Button";
interface ProdCarrinhoProps{
    nome: string,
    img: string,
    valor:number,
    btnRemover: ButtonProps
}

const ProdutoCarrinho:React.FC<ProdCarrinhoProps> = ({nome, img, valor, btnRemover}) =>{

    return (<>{nome}</>);
}