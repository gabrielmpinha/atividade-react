import { ButtonProps } from "./Button";
import { useNavigate } from "react-router-dom";
interface ButtonHome {
  btnHome: ButtonProps;
  btn2: ButtonProps;
  btn3: ButtonProps;
  btnCarrinho: ButtonProps;
}
export const ButtonHome = () => {
   const navigate = useNavigate();
  const btnHome: ButtonProps = {
    text: "Home",
    onClick: () => navigate('/'),
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
    onClick: ()=>navigate('/carrinho'),
    className: "text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active",
  };
  return {btnHome, btn2, btn3, btnCarrinho}
};
