import {Produto} from "./Produto"

type Item = {
    nome:string;
    img:string;
    valor:number;
}
export interface ListaProps {
    items: Item[];
}

export const ListaProdutos: React.FC<ListaProps> = ({items}) => {
    
    //var items = [{nome: 'Nome1', img: 'link', valor: 10}, {nome: 'Nome2', img: 'link', valor: 120}, {nome: 'Nome3', img: 'link', valor: 89.90}, 
    //{nome: 'Nome4', img: 'link', valor: 220}, {nome: 'Nome5', img: 'link', valor: 323}, {nome: 'Nome6', img: 'link', valor: 24}]

/*    var nomes = ['Nome1', 'Nome2', 'Nome3', 'Nome4', 'Nome5', 'Nome6', 'Nome7', 'Nome8'];
    var imgs = ['link', 'link', 'link', 'link', 'link', 'link', 'link', 'link']
    var valores = [12, 11, 90, 150, 200, 30.80, 88, 100, 17, 20]*/
    return(
        
        <div className="listaProd">
        {items.map(item => <Produto nome ={item.nome} img = {item.img} valor ={item.valor} key={item.nome}/>)}
        </div>
    );
}