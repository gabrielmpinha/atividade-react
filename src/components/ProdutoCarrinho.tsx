import { ButtonProps } from "./Button";
import { Button } from "./Button";
export interface ProdCarrinhoProps{
    nome: string,
    img: string,
    valor:number,
    //btnRemover: ButtonProps
}

export const ProdutoCarrinho:React.FC<ProdCarrinhoProps> = ({nome, img, valor/*, btnRemover*/}) =>{

    return (
    <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
        <img src="" alt="Imagem do produto"></img>
        <h1>{nome}</h1>
        <h2>{valor}</h2>
        <Button text="Remover item" onClick={()=>{}} className=""/>
    
    </div>
    );
}