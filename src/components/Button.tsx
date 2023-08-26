//import {Produto} from "./Produto"
export interface ButtonProps{
    text: string;
    onClick:() => void;
    className: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({text, onClick, className, disabled}) => {

    return(
        <button onClick={onClick} className={className} disabled={disabled}>{text}</button>

    );
}