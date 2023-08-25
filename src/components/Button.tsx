//import {Produto} from "./Produto"
export interface ButtonProps{
    text: string;
    onClick:() => void;
    className: string;
}

export const Button: React.FC<ButtonProps> = ({text, onClick, className}) => {

    return(
        <button onClick={onClick} className={className}>{text}</button>

    );
}